import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFixtures = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(pathToFixtures(filename), 'utf-8');

test('genDiff json', () => {
  const expected = readFile('expected_file.txt');
  const diff = genDiff(pathToFixtures('file1.json'), pathToFixtures('file2.json'));
  expect(diff).toBe(expected);
});

test('genDiff yml', () => {
  const expected = readFile('expected_file.txt');
  const diff = genDiff(pathToFixtures('file1.yml'), pathToFixtures('file2.yml'));
  expect(diff).toBe(expected);
});
