#!/usr/bin/env node
// Fail on high/critical npm advisories, except ones explicitly accepted in
// .github/audit-allowlist.json. An accepted advisory fails again once a safe
// (non-major) fix exists or after its reviewBy date, so it can't linger.
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";

const allowlistPath = new URL("../.github/audit-allowlist.json", import.meta.url);
const allowlist = existsSync(allowlistPath) ? JSON.parse(readFileSync(allowlistPath, "utf8")).advisories ?? [] : [];
const today = new Date().toISOString().slice(0, 10);

let raw;
try {
  raw = execFileSync("npm", ["audit", "--json"], { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] });
} catch (error) {
  raw = error.stdout; // npm audit exits nonzero when it finds anything
}
const audit = JSON.parse(raw || "{}");
if (audit.error || typeof audit.vulnerabilities !== "object") {
  console.error("npm audit did not return a usable report");
  process.exit(2);
}

const failures = [];
const accepted = [];
for (const [name, finding] of Object.entries(audit.vulnerabilities)) {
  if (!["high", "critical"].includes(finding.severity)) continue;
  const fix = finding.fixAvailable;
  const safeFix = fix === true || (fix && typeof fix === "object" && !fix.isSemVerMajor);
  for (const via of finding.via ?? []) {
    if (typeof via !== "object") continue;
    const id = (via.url ?? "").split("/").pop();
    const entry = allowlist.find((item) => item.id === id);
    if (entry && !safeFix && today <= entry.reviewBy) {
      accepted.push(`${id} in ${name} (accepted until ${entry.reviewBy}: ${entry.reason})`);
    } else {
      const why = entry ? (safeFix ? "a safe fix is now available" : `review date ${entry.reviewBy} passed`) : "not accepted";
      failures.push(`${via.severity} ${id} in ${name}: ${via.title} (${why})`);
    }
  }
}

for (const line of accepted) console.log(`accepted: ${line}`);
if (failures.length) {
  for (const line of failures) console.error(`FAIL: ${line}`);
  process.exit(1);
}
console.log("npm audit: no unaccepted high or critical advisories");
