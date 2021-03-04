#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import genDiff from '../index.js';

const program = new Command();

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.\n')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const difference = genDiff(filepath1, filepath2);
    console.log(difference);
  })
  .parse();
