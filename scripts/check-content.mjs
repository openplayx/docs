import assert from 'node:assert/strict';
import {readdir, readFile} from 'node:fs/promises';
import {join, relative, dirname, resolve} from 'node:path';
export const root = new URL('../', import.meta.url).pathname;
export async function files(dir) {
  const entries = await readdir(dir, {withFileTypes: true});
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]))).flat().sort();
}
const en = join(root, 'docs'), zh = join(root, 'i18n/zh-Hans/docusaurus-plugin-content-docs/current');
const ids = async dir => (await files(dir)).filter(p => /\.mdx?$/.test(p)).map(p => relative(dir, p));
assert.deepEqual(await ids(en), await ids(zh), 'Every document must have a reviewed translation; missing translations block publishing');
for (const dir of [en, zh]) for (const id of await ids(dir)) {
  const path = join(dir, id), text = await readFile(path, 'utf8');
  assert.match(text, /^---\ntitle: .+\n/, `${id}: title required`);
  assert(!/TODO|lorem ipsum|\/Users\/|design\/secrets|BEGIN .*PRIVATE KEY|gh[pousr]_[A-Za-z0-9]{20}/i.test(text), `${id}: placeholder or private content`);
  for (const match of text.matchAll(/\]\(([^)#\s]+)(?:#[^)]*)?\)/g)) {
    if (/^(https?:|mailto:|\/)/.test(match[1])) continue;
    const target = resolve(dirname(path), match[1]);
    assert(target.startsWith(dir + '/'), `${id}: link leaves public content`);
    await readFile(target);
  }
}
console.log(`Checked ${(await ids(en)).length} bilingual document pairs and local Markdown links.`);
