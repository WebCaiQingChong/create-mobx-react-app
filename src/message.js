const chalk = require('chalk')

const log = msg => {
  console.log(msg)
}
module.exports = {
  error(err) {
    log(`\n${chalk.red.bold(err)}`)
  },
  success(msg) {
    log(`\n${chalk.green.bold(msg)}`)
  },
  warn(msg) {
    log(`\n${chalk.yellow.bold(msg)}`)
  },
  info(msg) {
    log(`\n${chalk.blue(msg)}`)
  }
}
