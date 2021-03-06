import fs from 'fs';
import path from 'path';
import parser from './parsers.js';

const getFileData = (pathFile) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), pathFile), 'utf-8');
  const extension = path.extname(pathFile);
  return parser(readFile, extension);
};

export default getFileData;
