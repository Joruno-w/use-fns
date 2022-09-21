import { promises as fs } from "node:fs";

const pkg = await fs.readFile("./package.json", "utf-8");
const readme = await fs.readFile("./README.md", "utf-8");

await fs.writeFile(
  "./README.md",
  readme.replace(/(\d+(?:\.\d+){2})/, JSON.parse(pkg).version)
);