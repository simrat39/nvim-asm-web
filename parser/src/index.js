import { marked } from 'marked';
import { readFileSync, writeFileSync } from 'fs';

const res = await fetch(
  'https://raw.githubusercontent.com/rockerBOO/awesome-neovim/main/README.md'
);
const mdStr = await res.text();
const tokens = marked.lexer(mdStr);

let closestL3 = undefined;
const re = /^-?\ ?\[(.*)\]\((.*)\)\ - (.*)/;
const out = {};

tokens.forEach((t) => {
  if (t.type === 'heading' && t.depth === 3) {
    closestL3 = t.text;
    out[closestL3] = [];
  } else if (t.type === 'list') {
    if (closestL3) {
      t.items.forEach((i) => {
        i.text.split('\n').forEach((f) => {
          const matches = re.exec(f);
          if (matches !== null && matches.length === 4) {
            out[closestL3].push({
              gh: matches[1],
              link: matches[2],
              desc: matches[3],
            });
          }
        });
      });
    }
  }
});

writeFileSync('./output.json', JSON.stringify(out));
