import _ from 'lodash';

const indent = ' '.repeat(4);
const getIndent = (count) => indent.repeat(count);
const getStringifyTree = (lines, spaces) => (
  [
    '{',
    ...lines,
    `${spaces}}`,
  ].join('\n')
);

const getValue = (data, depth) => {
  if (!_.isObject(data)) {
    return data;
  }
  const lines = Object
    .entries(data)
    .map(([key, value]) => {
      const preparedValue = getValue(value, depth + 1);
      return `${getIndent(depth)}${indent}${key}: ${preparedValue}`;
    });
  return getStringifyTree(lines, getIndent(depth));
};

const getStringifyLine = (depth, sign, key, value) => `${getIndent(depth)}  ${sign} ${key}: ${getValue(value, depth + 1)}`;
const mapping = {
  added: (depth, { key, value }) => getStringifyLine(depth, '+', key, value),
  deleted: (depth, { key, value }) => getStringifyLine(depth, '-', key, value),
  unchanged: (depth, { key, value }) => getStringifyLine(depth, ' ', key, value),
  changed: (depth, { key, value }) => [getStringifyLine(depth, '-', key, value.oldValue), getStringifyLine(depth, '+', key, value.newValue)],
  nested: (depth, { key, children }, iter) => getStringifyLine(depth, ' ', key, iter(children, depth + 1)),
};

const stylish = (data) => {
  const iter = (tree, depth) => {
    const lines = tree.flatMap((node) => mapping[node.state](depth, node, iter));
    return getStringifyTree(lines, getIndent(depth));
  };
  return iter(data, 0);
};

export default stylish;
