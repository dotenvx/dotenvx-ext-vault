#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

const packageJson = require('./../lib/helpers/packageJson')
const { setLogLevel } = require('./../shared/logger')

// global log levels
program
  .option('-l, --log-level <level>', 'set log level', 'info')
  .option('-q, --quiet', 'sets log level to error')
  .option('-v, --verbose', 'sets log level to verbose')
  .option('-d, --debug', 'sets log level to debug')
  .hook('preAction', (thisCommand, actionCommand) => {
    const options = thisCommand.opts()

    setLogLevel(options)
  })

// dotenvx ext vault migrate
program.command('migrate')
  .description('instructions for migrating .env.vault to encrypted env file(s)')
  .action(require('./actions/migrate'))

// cli
program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)

program.parse(process.argv)
