const download = require('download-git-repo')
const tem = 'WebCaiQingChong/algorithms'
module.exports = function(target) {
  return new Promise((resolve, reject) => {
    download(tem, target, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
