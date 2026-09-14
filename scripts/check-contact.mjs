import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = readFileSync(new URL("../app/api/contact/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

// Exercise the real request handler with an isolated environment and a fake mail
// transport. No email is sent and no developer or production secrets are loaded.
function handler({ env = {}, teamError = false } = {}) {
  const sent = [];
  const module = { exports: {} };
  vm.runInNewContext(compiled, {
    module, exports: module.exports,
    process: { env: { RESEND_API_KEY: "test-key", ...env } },
    console: { info() {}, error() {} },
    require(id) {
      if (id === "resend") return { Resend: class {
        emails = { send: async (message) => {
          sent.push(message);
          return teamError ? { error: { message: "Rejected" } } : { data: { id: "test-id" } };
        } };
      } };
      if (id === "@/lib/site") return { siteUrl: () => "https://www.greenexpert.ma/" };
      if (id === "./email-templates") return { TeamEmailTemplate() {}, ClientEmailTemplate() {} };
      return require(id);
    },
  });
  return { post: module.exports.POST, sent };
}

const validBody = {
  name: "Test client", email: "client@example.com", phone: "", projectType: "Jardin",
  message: "Demande de renseignements pour un jardin.", website: "",
};
function request(body = validBody) {
  return { json: async () => body, headers: new Headers({ "x-forwarded-for": "192.0.2.1" }) };
}

for (const override of [undefined, "ali@thinkable.co", "ali.khyatti0@gmail.com"]) {
  const { post, sent } = handler({ env: override ? { CONTACT_TO_EMAIL: override } : {} });
  const response = await post(request());
  assert.equal(response.status, 200);
  assert.equal(sent.length, 2);
  assert.equal(sent[0].to.join(","), "said@greenexpert.ma");
  assert.equal(sent[0].replyTo, validBody.email);
  assert.equal(sent[1].to.join(","), validBody.email);
}
{
  const { post, sent } = handler();
  assert.equal((await post(request({ ...validBody, email: "invalid" }))).status, 400);
  assert.equal(sent.length, 0);
}
{
  const { post, sent } = handler({ teamError: true });
  assert.equal((await post(request())).status, 502);
  assert.equal(sent.length, 1);
}
console.log("PASS: team recipient, stale overrides, client confirmation, validation and mail-provider failure (mock transport; no email sent).");
