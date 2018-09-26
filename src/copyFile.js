const fs = require('fs')
const fsext = require('fs-extra')
const message = require('./message')
const { join } = require('path')
const getFile = pathName => {
  return new Promise((resolve, reject) => {
    fs.readdir(pathName, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}
module.exports = async (currentPathName, target) => {
  try {
    const fileList = await getFile(currentPathName)
    let promiseArr = []
    fileList.forEach(file => {
      promiseArr.push(fsext.move(join(currentPathName, file), target))
    })
    Promise.all(promiseArr)
      .then(() => {
        message.success('file all move success')
      })
      .catch(err => {
        console.log(err)
      })
  } catch (err) {
    message.error(err)
  }
}
