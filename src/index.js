const commander = require('commander')
const init = require('./init')
const add = require('./add')
const message = require('./message')
const packageJson = require('../package.json')
const packName = packageJson.name
const version = packageJson.version
const {join} = require('path')
const currentPath = process.cwd()

const program = new commander.Command(packName)
  .version(version)
  .option('-l, --list', 'print the template list')

  // create new project
  program
  .command('new <project-name>')
  .description('create init project')
  .allowUnknownOption()
  .action(name => {
    console.log(name)
    if (typeof name === "undefined") {
      message.error('please input your project name')
      process.exit(1)
    }
    init(name)
  })
  
  // add own template list with config file
  program
  .command('add <config-file-path>')
  .description('add your own template list')
  .allowUnknownOption()
  .action(file => {
    add(join(currentPath, file))
  });

  
  program.parse(process.argv)


if (program.list) {
  const config = require('./config')
  const insertConfig = require('./insertConfig')
  try {
    const temList = {...config.TEM_LIST, ...insertConfig.TEM_LIST}
    Object.keys(temList).forEach(item => {
      message.info(`${item}:  ${temList[item].desc}`)
    })
  } catch(err) {
    message.error(err)
    process.exit()
  }
}





