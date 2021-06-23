#!/usr/bin/env node

const commander = require('commander');

commander
  .version('0.0.1')
  .option('-n, --yourname [yourname]', 'Your name')
  .option('-a, --age [age]', 'Your age')
  .description('A cli application named pro')
  .parse(process.argv);

console.log(commander);
// console.log(process.argv)
console.log(process.cwd())