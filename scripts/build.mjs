// Validates data/evidence.json and writes site/data.js and data/evidence.csv.
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const data = JSON.parse(readFileSync(root + "data/evidence.json", "utf8"));

const ids = new Set(data.evidence.map((e) => e.id));
const problems = [];
if (ids.size !== data.evidence.length) problems.push("duplicate evidence ids");
const check = (where, list) =>
  list.forEach((id) => ids.has(id) || problems.push(`${where} references missing ${id}`));
for (const [cand, cats] of Object.entries(data.scores))
  for (const [cat, s] of Object.entries(cats)) check(`scores.${cand}.${cat}`, s.evidence);
for (const [cand, p] of Object.entries(data.partisanship)) check(`partisanship.${cand}`, p.evidence);
for (const e of data.evidence) if (!/^https:\/\//.test(e.url)) problems.push(`${e.id} has no https url`);
const weights = data.categories.reduce((a, c) => a + c.weight, 0);
if (weights !== 100) problems.push(`weights sum to ${weights}`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

writeFileSync(root + "site/data.js", "window.ABUNDANCE_DATA = " + JSON.stringify(data) + ";\n");

const cols = ["id", "candidate", "category", "issue", "claim", "summary", "url", "source", "date",
  "legislation", "type", "direction", "interpretation", "confidence", "federal"];
const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
const csv = [cols.join(","), ...data.evidence.map((e) => cols.map((c) => esc(e[c])).join(","))].join("\n");
writeFileSync(root + "data/evidence.csv", csv + "\n");

console.log(`ok: ${data.evidence.length} evidence entries, ${data.candidates.length} candidates`);

// site/app.html is the page body (the Artifact host adds the document skeleton).
// site/index.html wraps it so the folder also works as a plain static site.
const body = readFileSync(root + "site/app.html", "utf8");
writeFileSync(root + "site/index.html",
  `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n` +
  `<style>[hidden]{display:none!important}body{margin:0}</style>\n</head>\n<body>\n${body}\n</body>\n</html>\n`);
