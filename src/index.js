const commander = require('commander')
const init = require('./init')

const packageJson = require('../package.json')

const packName = packageJson.name
const version = packageJson.version
let projectName = ''

const program = new commander.Command(packName)
  .version(version)
  .arguments('<project-name>')
  .action(name => {
    projectName = name
    init(name)
  })

// program.command()
program.parse(process.argv)
