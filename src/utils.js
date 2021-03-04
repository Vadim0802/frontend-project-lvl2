import fs from 'fs';
import path from 'path';

const getFileData = (pathFile) => {
  const readFile = fs.readFileSync(path.resolve(process.cwd(), pathFile), 'utf-8');

  return JSON.parse(readFile);
};

export default getFileData;
