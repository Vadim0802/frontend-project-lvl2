import _ from 'lodash';

const formatValue = (value) => (typeof value === 'string' ? `'${value}'` : value);

const getStringifyLine = (path, node, iter) => {
  const {
    state, value, children, key,
  } = node;

  const valueFormat = formatValue(value);
  if (valueFormat instanceof Object) {
    valueFormat.oldValue = formatValue(valueFormat.oldValue);
    valueFormat.newValue = formatValue(valueFormat.newValue);
  }
  const pathToKey = path === '' ? `${key}` : `${path}.${key}`;

  switch (state) {
    case 'added':
      return `Property '${pathToKey}' was added with value: ${_.isPlainObject(value) ? '[complex value]' : valueFormat}`;
    case 'deleted':
      return `Property '${pathToKey}' was removed`;
    case 'changed':
      return `Property '${pathToKey}' was updated. From ${_.isPlainObject(value.oldValue) ? '[complex value]' : valueFormat.oldValue} to ${_.isPlainObject(value.newValue) ? '[complex value]' : valueFormat.newValue}`;
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
