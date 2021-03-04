import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFixtures = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

test('genDiff json', () => {
  const expected = fs.readFileSync(pathToFixtures('expected_file.txt'), 'utf-8');
  const diff = genDiff(pathToFixtures('file1.json'), pathToFixtures('file2.json'));
  expect(diff).toBe(expected);
});
