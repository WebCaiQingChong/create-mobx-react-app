const fsext = require('fs-extra')
const message = require('./message.js')
const ora = require('ora')
const download = require('./download')
const confirm = require('./confirm')
module.exports = async function(dirName) {
  if (fsext.pathExistsSync(dirName)) {
    message.warn(`this project name ${dirName} has already existed, please change the project name`)
  } else {
    const { clientType } = await confirm()
    const spinner = ora('is downloading template').start()
    download(dirName, clientType)
      .then(() => {
        spinner.succeed('template doanload success')
        message.info('please enjoy your happy coding~~')
      })
      .catch(err => {
        message.error(err)
        spinner.fail('download is meeting unknown error, please check your internet')
        process.exit()
      })
  }
}
