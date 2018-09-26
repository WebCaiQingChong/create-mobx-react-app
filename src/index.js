const commander = require('commander')
const init = require('./init')
const message = require('./message')
const packageJson = require('../package.json')
const config = require('./config')
const packName = packageJson.name
const version = packageJson.version
let projectName

const program = new commander.Command(packName)
  .version(version)
  .arguments('<project-name>')
  .action(name => {
    projectName = name
  })
  .option('-l, --list', 'print the template list')
  .allowUnknownOption()
  .parse(process.argv)


if (program.list) {
  Object.keys(config.TEM_LIST).forEach(item => {
    message.info(`${item}: ${config.TEM_LIST[item].desc}`)
  })
}

if (typeof projectName === "undefined") {
  message.error('please input your project name')
  process.exit(1)
}

init(projectName)
