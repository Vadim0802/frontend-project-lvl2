import getFileData from './src/utils.js';
import getTreeChanges from './src/getTreeChanges.js';
import formattedTree from './src/formattedTree.js';

const genDiff = (filepath1, filepath2) => {
  const before = getFileData(filepath1);
  const after = getFileData(filepath2);

  const treeChanges = getTreeChanges(before, after);
  const formatted = `{\n${formattedTree(treeChanges)}\n}`;

  return formatted;
};

export default genDiff;
