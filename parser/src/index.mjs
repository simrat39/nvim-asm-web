import { marked } from "marked";
import { writeFileSync } from "fs";

const res = await fetch(
  "https://raw.githubusercontent.com/rockerBOO/awesome-neovim/main/README.md"
);
const mdStr = await res.text();
const tokens = marked.lexer(mdStr);

let closestL3 = undefined;
const re = /^-? ?\[(.*)\]\((.*)\) - (.*)/;
const out = {};

for (const t of tokens) {
  if (t.type === "heading" && t.depth === 3) {
    closestL3 = t.text;
    out[closestL3] = [];
  } else if (t.type === "list") {
    if (closestL3) {
      for (const i of t.items) {
        for (const f of i.text.split("\n")) {
          const matches = re.exec(f);
          if (matches !== null && matches.length === 4) {
            const packageName = matches[1];
            const link = matches[2];
            const isGH = link.includes("github");

            out[closestL3].push({
              gh: packageName,
              link: link,
              desc: matches[3],
              isGH: isGH,
            });
          }
        }
      }
    }
  }
}

writeFileSync("./output.json", JSON.stringify(out));
