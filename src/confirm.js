const inquirer = require('inquirer')
const message = require('./message')
const clientType = {
  type: 'list',
  name: 'clientType',
  message: `请选择创建哪一端的项目       `,
  choices: ['node', 'h5', 'admin', 'miniapp']
}

module.exports = function(type) {
  try {
    const inputType = [clientType, ...type]
    return inquirer.prompt([inputType])
  } catch (err) {
    message.error(err)
    process.exit()
  }
}
