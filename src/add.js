const fsext = require('fs-extra')
const fs = require('fs')
const message = require('./message')
const ora = require('ora')
const {join} = require('path')
module.exports = filePath => {
  const spinner = ora('is writing file \n').start()
  try {
    let file = fs.readFileSync(filePath, {encoding: 'utf-8'})
    fs.writeFile(join(__dirname, './insertConfig.js'), file, {encoding: 'utf-8'}, err => {
      if (err) {
        spinner.fail(err)
        throw(err)
      }
      spinner.succeed('add success')
      process.exit()
    })
  } catch(err) {
    spinner.fail(err)
    process.exit()
  }
}