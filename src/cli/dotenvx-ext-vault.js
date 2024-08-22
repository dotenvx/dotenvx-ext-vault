#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

const examples = require('./examples')
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

// dotenvx ext vault encrypt
program.command('encrypt')
  .description('encrypt .env.* to .env.vault')
  .addHelpText('after', examples.encrypt)
  .argument('[directory]', 'directory to encrypt', '.')
  .option('-f, --env-file <paths...>', 'path(s) to your env file(s)')
  .action(require('./actions/encrypt'))

// cli
program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)

program.parse(process.argv)
