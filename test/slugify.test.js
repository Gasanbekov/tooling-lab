import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('turns spaces into hyphens and lowercases', () => {
  assert.equal(slugify('Hello World!'), 'hello-world');
});
