const download = require('download-git-repo')
const config = require('./config')
module.exports = function(target, type) {
  return new Promise((resolve, reject) => {
    download(config.TEM_LIST[type].addr, target, {clone: true}, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
