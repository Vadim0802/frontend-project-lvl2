import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const getStringifyLine = (path, node, iter) => {
  const {
    state, value, children, key,
  } = node;

  const valueFormat = formatValue(value);

  const pathToKey = path === '' ? `${key}` : `${path}.${key}`;

  switch (state) {
    case 'added':
      return `Property '${pathToKey}' was added with value: ${valueFormat}`;
    case 'deleted':
      return `Property '${pathToKey}' was removed`;
    case 'changed':
      return `Property '${pathToKey}' was updated. From ${formatValue(value.oldValue)} to ${formatValue(value.newValue)}`;
    case 'nested':
      return iter(children, `${pathToKey}`);
    default:
      return [];
  }
};

const plain = (data) => {
  const iter = (tree, path) => {
    const lines = tree.flatMap((node) => getStringifyLine(path, node, iter));
    return lines;
  };
  return iter(data, '').join('\n');
};

export default plain;
