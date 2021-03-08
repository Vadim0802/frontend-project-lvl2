#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import genDiff from '../index.js';

const program = new Command();

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.\n')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    try {
      const difference = genDiff(filepath1, filepath2, program.opts().format);
      console.log(difference);
    } catch (error) {
      console.log(error.message);
    }
  })
  .parse();
