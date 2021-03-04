import fs from 'fs';

const getFileData = (path) => {
  const readFile = fs.readFileSync(path, 'utf-8');

  return JSON.parse(readFile);
};

export default getFileData;
