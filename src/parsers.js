import yaml from 'js-yaml';

const parsers = (text, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(text);
    case '.yml':
      return yaml.load(text);
    default:
      throw new Error('Invalid extension');
  }
};

export default parsers;
