const fsext = require('fs-extra')
const fs = require('fs')
const message = require('./message.js')
const ora = require('ora')
const download = require('./download')
const confirm = require('./confirm')
const copyFile = require('./copyFile')
module.exports = async function(dirName) {
  if (fsext.pathExistsSync(dirName)) {
    message.warn(`this project name ${dirName} has already existed, please change the project name`)
  } else {
    const spinner = ora('is downloading template').start()
    // const { clientType } = await confirm([])
    download(dirName)
      .then(() => {
        message.success('success')
        spinner.succeed('template is doanload success')
        copyFile(`./${dirName}`, '/')
      })
      .catch(err => {
        message.error(err)
        spinner.fail('download is meeting unknown error, please check your internet')
        process.exit()
      })
  }
}
