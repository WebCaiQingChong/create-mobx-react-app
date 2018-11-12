const download = require('download-git-repo')
const config = require('./config')
const insertConfig = require('./insertConfig')
module.exports = function(target, type) {
  const temList = {...config.TEM_LIST, ...insertConfig.TEM_LIST}
  return new Promise((resolve, reject) => {
    download(temList.TEM_LIST[type].addr, target, {clone: true}, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
