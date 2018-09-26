const inquirer = require('inquirer')
const message = require('./message')
const config = require('./config')
const clientType = {
  type: 'list',
  name: 'clientType',
  message: `请选择项目类型       `,
  choices: Object.keys(config.TEM_LIST)
}

module.exports = function(type = []) {
  try {
    const inputType = [clientType, ...type]
    return inquirer.prompt([inputType])
  } catch (err) {
    message.error(err)
    process.exit()
  }
}
