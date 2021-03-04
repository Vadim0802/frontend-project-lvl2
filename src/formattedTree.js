import _ from 'lodash';

const formattedTree = (treeChanges) => {
  const indent = '  ';
  return _.sortBy(treeChanges, 'key').map((item) => {
    const { key, state, value } = item;
    if (state === 'added') {
      return `${indent}+ ${item.key}: ${value}`;
    }
    if (state === 'deleted') {
      return `${indent}- ${key}: ${value}`;
    }
    if (state === 'changed') {
      return `${indent}- ${key}: ${value.oldValue}\n${indent}+ ${key}: ${value.newValue}`;
    }
    return `${indent}  ${item.key}: ${value}`;
  }).join('\n');
};

export default formattedTree;
