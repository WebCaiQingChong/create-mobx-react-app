const chalk = require('chalk')

const log = msg => {
  console.log(msg)
}
module.exports = {
  error(err) {
    log(`\n${chalk.red.bold(err)}\n`)
  },
  success(msg) {
    log(`\n${chalk.green.bold(msg)}\n`)
  },
  warn(msg) {
    log(`\n${chalk.yellow.bold(msg)}\n`)
  },
  info(msg) {
    log(`\n${chalk.blue(msg)}\n`)
  }
}
