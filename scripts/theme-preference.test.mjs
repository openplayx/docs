import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const script = readFileSync(new URL('../static/js/theme-preference.js', import.meta.url), 'utf8');
for (const preference of ['light', 'dark', null, 'invalid']) {
  test(`first paint mirrors website preference ${preference}`, () => {
    const values = new Map([['theme', 'dark'], ['unrelated', 'keep']]);
    if (preference !== null) values.set('opx-theme', preference);
    vm.runInNewContext(script, {localStorage: {
      getItem: key => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
      removeItem: key => values.delete(key),
    }});
    assert.equal(values.get('theme') ?? null, ['light', 'dark'].includes(preference) ? preference : null);
    assert.equal(values.get('unrelated'), 'keep');
    assert.equal(values.get('opx-theme') ?? null, preference);
  });
}
test('blocked browser storage does not prevent page initialization', () => {
  assert.doesNotThrow(() => vm.runInNewContext(script, {localStorage: {getItem() {throw new Error('Storage denied');}}}));
});
