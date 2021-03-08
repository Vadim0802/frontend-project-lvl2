import getFileData from './src/utils.js';
import getTreeChanges from './src/getTreeChanges.js';
import formattedTree from './src/formatters/index.js';

const genDiff = (filepath1, filepath2, formatName) => {
  const before = getFileData(filepath1);
  const after = getFileData(filepath2);

  const treeChanges = getTreeChanges(before, after);
  const formatted = formattedTree(treeChanges, formatName);

  return formatted;
};

export default genDiff;
