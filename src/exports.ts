import { readFileSync, promises as fs } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const filename = resolve(fileURLToPath(import.meta.url), "../index.ts");
const content = readFileSync(filename, "utf-8");
const regIterator = content.matchAll(/(const|var|let)\s(use\w+)/g);
let str = "";
for (const [, , name] of regIterator) {
  str += `\n  ${name},`;
}

const exportsName = "pkg";

const allExports = `{ ${str.substring(0, str.length - 1)} \n}`;

(async () => {
  if (content.includes(exportsName)) {
    const res = content.replace(/const pkg [\s\S]+/, "");
    await fs.writeFile(filename, res);
  }
  await fs.writeFile(filename, `const ${exportsName} = ${allExports}\n\n`, {
    flag: "a",
  });
  await fs.writeFile(filename, `export default ${exportsName}\n\n`, {
    flag: "a",
  });
  await fs.writeFile(filename, `export ${allExports} \n\n`, { flag: "a" });
  // await fs.writeFile(filename, `module.exports = ${exportsName}`, {
  //   flag: "a",
  // });
})();
