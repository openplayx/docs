// Docusaurus emits synchronous theme/bootstrap scripts. Externalize executable
// inline code, preserving order, so the production script CSP needs no unsafe-inline.
import {readdir, readFile, writeFile, mkdir} from 'node:fs/promises';
import {join, relative} from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root = new URL('../', import.meta.url).pathname, out = join(root, 'build');
async function files(dir) {
  return (await Promise.all((await readdir(dir, {withFileTypes:true})).map(e => e.isDirectory() ? files(join(dir,e.name)) : [join(dir,e.name)]))).flat().sort();
}
await mkdir(join(out,'assets/js'), {recursive:true});
for (const file of await files(out)) if (file.endsWith('.html')) {
  let html = await readFile(file,'utf8');
  if (relative(out, file).startsWith('zh-Hans/')) {
    html = html
      .replaceAll('href="https://openplayx.com/"', 'href="https://openplayx.com/zh/"')
      .replaceAll('href="https://openplayx.com/download/"', 'href="https://openplayx.com/zh/download/"')
      .replaceAll('href="https://openplayx.com/privacy/"', 'href="https://openplayx.com/zh/privacy/"');
  }
  if (!html.includes('src="/docs/js/theme-preference.js"')) html = html.replace('<head>', '<head><script src="/docs/js/theme-preference.js"></script>');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
  for (const [tag, attrs, code] of scripts) {
    if (!code.trim() || /\bsrc=|type=["']application\/(?:ld\+)?json/.test(attrs)) continue;
    const name = `assets/js/inline-${createHash('sha256').update(code).digest('hex').slice(0,20)}.js`;
    await writeFile(join(out,name),code);
    html = html.replace(tag, `<script${attrs} src="/docs/${name}"></script>`);
  }
  await writeFile(file,html);
}
let commit = null;
try { commit = execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim(); } catch {}
const manifest = {schemaVersion:1,docsCommit:commit,nodeVersion:process.version,files:{}};
for (const path of await files(out)) if (!path.endsWith('/docs-manifest.json')) {
  const data = await readFile(path);
  manifest.files[relative(out,path)] = {sha256:createHash('sha256').update(data).digest('hex'),size:data.length};
}
await writeFile(join(out,'docs-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Externalized bootstrap scripts; recorded ${Object.keys(manifest.files).length} artifact digests.`);
