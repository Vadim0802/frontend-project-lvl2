import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFixtures = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(pathToFixtures(filename), 'utf-8');

test('genDiff stylish format', () => {
  const expected = readFile('expected_file.txt');

  const diffJson = genDiff(pathToFixtures('file1.json'), pathToFixtures('file2.json'), 'stylish');
  const diffYml = genDiff(pathToFixtures('file1.yml'), pathToFixtures('file2.yml'), 'stylish');

  expect(diffJson).toBe(expected);
  expect(diffYml).toBe(expected);
});

test('genDiff plain format', () => {
  const expected = readFile('expected_file_plain.txt');

  const diffJson = genDiff(pathToFixtures('file1.json'), pathToFixtures('file2.json'), 'plain');
  const diffYml = genDiff(pathToFixtures('file1.yml'), pathToFixtures('file2.yml'), 'plain');

  expect(diffJson).toBe(expected);
  expect(diffYml).toBe(expected);
});
