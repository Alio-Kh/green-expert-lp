import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("./check_seo.py", import.meta.url));
const candidates = process.platform === "darwin"
  ? ["python3", "/usr/bin/python3", "python"]
  : ["python3", "python"];

// Some local Python installs have an incompatible native XML library.
// Check the standard library before running the audit, without installing packages.
const python = candidates.find((candidate) => spawnSync(candidate, [
  "-c", "import sys; assert sys.version_info >= (3, 8); import xml.etree.ElementTree as ET; ET.fromstring('<ok/>')",
], { stdio: "ignore" }).status === 0);

if (!python) {
  console.error("SEO checks require Python 3.8+ with a working standard XML library.");
  process.exit(1);
}

const result = spawnSync(python, [script, ...process.argv.slice(2)], { stdio: "inherit" });
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
