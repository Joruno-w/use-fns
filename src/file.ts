import {readFileSync, writeFileSync} from 'node:fs'
import {resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const filename = resolve( fileURLToPath(import.meta.url),'../index.ts')
const content = readFileSync(filename,'utf-8')
const regIterator = content.matchAll(/(const|var|let)\s(use\w+)/g)
let str = '';
for (const [,,name] of regIterator) {
    str += `\n  ${name},`
}

const exportsName = 'pkg'
const allExports = `{ ${str} \n}`

writeFileSync(filename,`const ${exportsName} = ${allExports}\n\n`,{flag: 'a'})
writeFileSync(filename,`export default ${exportsName}\n\n`,{flag: 'a'})
writeFileSync(filename,`export ${allExports} \n\n`,{flag: 'a'})
writeFileSync(filename,`module.exports = ${exportsName}`,{flag: 'a'})