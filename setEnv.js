#!/usr/bin/env node

const dotenv = require('dotenv');
const shell = require('shelljs');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
dotenv.config({
  path: ENVIRONMENT !== 'development' ? `.env.${ENVIRONMENT}` : '.env',
});

// Run the command from the arguments
const args = process.argv.slice(2);
const commandFromArguments = args.join(' ');
shell.exec(commandFromArguments);
