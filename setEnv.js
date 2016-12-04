#!/usr/bin/env node

const dotenv = require('dotenv');
const shell = require('shelljs');

dotenv.config({
  path: `./.env.${process.env.ENV}`,
});

// Run the command from the arguments
const args = process.argv.slice(2);
const commandFromArguments = args.join(' ');
shell.exec(commandFromArguments);
