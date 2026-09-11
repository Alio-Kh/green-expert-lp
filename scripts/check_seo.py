"""Check SEO behavior against a running build, without third-party dependencies.
Usage: python3 scripts/check_seo.py http://localhost:3001 [--images]
Does not submit forms or modify the site.
"""
import concurrent.futures
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://localhost:3000"
ORIGIN = "https://www.greenexpert.ma"


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta = {}
        self.canonicals = []
        self.ids = set()
        self.links = []
        self.images = []
        self.headings = 0
        self.title = ""
        self.in_title = False
        self.schema_text = None
        self.schemas = []
        self.hidden = []
        self.videos = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "title":
            self.in_title = True
        if tag == "meta":
            self.meta.setdefault(attrs.get("name", attrs.get("property")), []).append(attrs.get("content", ""))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs["href"])
        if tag == "a":
            self.links.append(attrs.get("href", ""))
        if tag == "img":
            self.images.append(attrs)
        if tag == "h1":
            self.headings += 1
        if tag == "video":
            self.videos += 1
        # Decorative elements and the explicitly hidden spam trap are intentional.
        if attrs.get("aria-hidden") != "true" and re.search(r"(?:^|;)\s*opacity:\s*0(?:;|$)", attrs.get("style", "")):
            self.hidden.append(tag)
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.schema_text = ""

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.schema_text is not None:
            self.schema_text += data

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.schema_text is not None:
            self.schemas.append(json.loads(self.schema_text))
            self.schema_text = None


def fetch(path):
    try:
        with urllib.request.urlopen(BASE + path, timeout=30) as response:
            return response.status, response.read().decode()
    except urllib.error.HTTPError as error:
        return error.code, error.read().decode()


def require(condition, message):
    if not condition:
        raise AssertionError(message)


paths = ["/", "/notre-processus", "/paysagiste-rabat", "/amenagement-espaces-verts", "/conseils/amenagement-espaces-verts"]
for source, prefix in [("services-data.ts", "/services/"), ("projects-data.ts", "/projets/")]:
    slugs = re.findall(r'^    slug: "([^"]+)"', (ROOT / "lib" / source).read_text(), re.M)
    paths += [prefix + slug for slug in slugs]

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    responses = dict(zip(paths, executor.map(fetch, paths)))
pages = {}
indexable = set()
for path, (status, html) in responses.items():
    require(status == 200, f"{path}: HTTP {status}")
    page = Page()
    page.feed(html)
    pages[path] = page
    require(page.headings == 1, f"{path}: expected one H1, found {page.headings}")
    require(len(page.canonicals) == 1, f"{path}: missing or duplicate canonical")
    require(page.canonicals[0].rstrip("/") == (ORIGIN + path).rstrip("/"), f"{path}: wrong canonical {page.canonicals}")
    require(len(page.meta.get("description", [])) == 1, f"{path}: missing or duplicate description")
    require(page.meta.get("og:locale") == ["fr_MA"], f"{path}: incorrect OG locale")
    require(page.schemas and "LandscapingBusiness" not in json.dumps(page.schemas), f"{path}: missing/invalid business schema")
    require(not page.hidden, f"{path}: server content hidden at opacity zero: {page.hidden}")
    require(not page.videos, f"{path}: automatic video payload reintroduced")
    require(all("alt" in image for image in page.images), f"{path}: missing alt attribute")
    require(all("fal.media" not in urllib.parse.unquote(image.get("src", "")) for image in page.images), f"{path}: unreliable public image source")
    if "noindex" not in ",".join(page.meta.get("robots", []) + page.meta.get("googlebot", [])):
        indexable.add(path)
        require(page.title.count("Green Expert") == 1, f"{path}: repeated/missing brand in title")
    elif path.startswith("/projets/"):
        require("réalisation n’est pas disponible" in html, f"{path}: unverified project exposed")

for path, page in pages.items():
    for href in page.links:
        url = urllib.parse.urlsplit(urllib.parse.urljoin(BASE + path, href))
        if url.netloc not in {urllib.parse.urlsplit(BASE).netloc, "www.greenexpert.ma", "greenexpert.ma"}:
            continue
        require(url.path in pages, f"{path}: internal target not audited or missing: {href}")
        if url.fragment:
            require(urllib.parse.unquote(url.fragment) in pages[url.path].ids, f"{path}: broken fragment {href}")

status, sitemap = fetch("/sitemap.xml")
require(status == 200, "sitemap unavailable")
tree = ET.fromstring(sitemap)
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "image": "http://www.google.com/schemas/sitemap-image/1.1"}
locations = [node.text for node in tree.findall("s:url/s:loc", ns)]
require(len(locations) == len(set(locations)), "duplicate sitemap URLs")
require(set(locations) == {ORIGIN + path for path in indexable}, "sitemap does not match indexable pages")
for node in tree.findall(".//image:loc", ns):
    require(node.text.startswith(ORIGIN + "/"), f"image sitemap URL is not absolute and canonical: {node.text}")
status, robots = fetch("/robots.txt")
require(status == 200 and f"Sitemap: {ORIGIN}/sitemap.xml" in robots, "robots sitemap declaration is incorrect")
for path in ["/seo-check-missing", "/services/seo-check-missing", "/projets/seo-check-missing"]:
    status, html = fetch(path)
    require(status == 404, f"{path}: expected 404, got {status}")
    page = Page()
    page.feed(html)
    require(not page.canonicals, f"{path}: 404 inherits a canonical")
require(len({pages[path].title for path in indexable}) == len(indexable), "duplicate indexable page titles")
require(len({pages[path].meta['description'][0] for path in indexable}) == len(indexable), "duplicate indexable descriptions")
if "--images" in sys.argv[2:]:
    # Test actual image responses, including a rendered responsive variant.
    # Checking only image tags would miss a failed upstream image provider.
    image_urls = set()
    for page in pages.values():
        for image in page.images:
            image_urls.add(urllib.parse.urljoin(BASE, image["src"]))
            variants = re.findall(r"(\S+)\s+(\d+)w", image.get("srcset", ""))
            if variants:
                variant = min(variants, key=lambda item: abs(int(item[1]) - 750))[0]
                image_urls.add(urllib.parse.urljoin(BASE, variant))

    def check_image(url):
        try:
            request = urllib.request.Request(url, headers={"Accept": "image/avif,image/webp,image/*"})
            with urllib.request.urlopen(request, timeout=45) as response:
                content_type = response.headers.get("Content-Type", "")
                signature = response.read(64)
                require(response.status == 200 and content_type.startswith("image/") and signature,
                        f"image unavailable: {url}: HTTP {response.status}, {content_type}")
        except (urllib.error.URLError, TimeoutError) as error:
            raise AssertionError(f"image request failed: {url}: {error}") from error

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        list(executor.map(check_image, sorted(image_urls)))
    print(f"PASS: {len(image_urls)} rendered image URLs return non-empty image responses.")
print(f"PASS: {len(pages)} pages; {len(indexable)} indexable; canonical/schema/metadata/visibility/image references/internal links/sitemap/robots/404 checks.")
