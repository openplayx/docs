import assert from 'node:assert/strict';
import {readFile, readdir, stat} from 'node:fs/promises';
import {join, resolve} from 'node:path';
const out = new URL('../build/', import.meta.url).pathname;
async function files(dir) { return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?files(join(dir,e.name)):[join(dir,e.name)]))).flat(); }
let count=0;
for (const path of await files(out)) if (path.endsWith('.html')) {
  const html = await readFile(path,'utf8');
  assert(!html.includes('/docs/docs/'), path+': duplicated base URL');
  for (const [,attrs,body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    assert(!body.trim() || /type=["']application\/(?:ld\+)?json/.test(attrs), path+': executable inline script');
  }
  for (const [,value] of html.matchAll(/\b(?:href|src)="([^"#]+)"/g)) {
    const url = new URL(value.replaceAll('&amp;','&'), 'https://openplayx.com/docs/'+path.slice(out.length).replace(/index\.html$/,''));
    if (url.origin !== 'https://openplayx.com') continue;
    // The independent docs build may link to website pages by absolute URL.
    if (/^https?:/.test(value) && !url.pathname.startsWith('/docs/')) continue;
    assert(url.pathname.startsWith('/docs/'), `${path}: base URL leak ${value}`);
    let target=resolve(out,'.'+decodeURIComponent(url.pathname.slice('/docs'.length)));
    assert(target === out.replace(/\/$/,'') || target.startsWith(out), 'Path escapes output');
    try { if ((await stat(target)).isDirectory()) target=join(target,'index.html'); }
    catch (error) { if ((!url.pathname.endsWith('/') || url.pathname.endsWith('/404/')) && error.code==='ENOENT') target+='.html'; else throw error; }
    const content=await readFile(target,'utf8');
    if (url.hash && target.endsWith('.html')) {
      const id=decodeURIComponent(url.hash.slice(1));
      assert(content.includes(`id="${id}"`) || content.includes(`id='${id}'`), `Missing anchor: ${value}`);
    }
    count++;
  }
}
for (const prefix of ['', 'zh-Hans/']) {
  for (const route of ['', 'sources/smb/', 'ai/models/', 'ai/mcp/', 'remote-access/connector/']) {
    const html=await readFile(join(out,prefix,route,'index.html'),'utf8');
    assert(html.includes('rel="canonical"') && html.includes('hreflang='), 'SEO metadata');
  }
  const indexes=(await files(join(out,prefix))).filter(p=>p.startsWith(join(out,prefix)) && /search-index[^/]*\.json$/.test(p));
  assert(indexes.length,'Local search index missing');
  const index=indexes.find(p=>prefix ? p.includes('/zh-Hans/') : !p.includes('/zh-Hans/'));
  const text=await readFile(index,'utf8');
  assert(Buffer.byteLength(text)<2_000_000,'Search index exceeds initial 2 MB budget');
  assert(text.includes(prefix?'共享':'SMB'),'Search title missing');
  assert(text.includes(prefix?'权限':'permissions'),'Search body missing');
}
console.log(`Checked bilingual deep routes, SEO, search index contents and ${count} local HTML references.`);
