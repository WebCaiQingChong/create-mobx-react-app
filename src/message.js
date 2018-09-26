const chalk = require('chalk')

const log = msg => {
  console.log(msg)
}
module.exports = {
  error(err) {
    log(`${chalk.red.bold(err)}\n`)
  },
  success(msg) {
    log(`${chalk.green.bold(msg)}\n`)
  },
  warn(msg) {
    log(`${chalk.yellow.bold(msg)}\n`)
  },
  info(msg) {
    log(`${chalk.blue(msg)}\n`)
  }
}
