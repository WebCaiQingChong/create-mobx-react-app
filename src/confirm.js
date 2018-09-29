
const config = require('./config')
const insertConfig = require('./insertConfig')
let temList
if (insertConfig) {
  temList = {...config.TEM_LIST, ...insertConfig.TEM_LIST}
} else {
  temList = {...config.TEM_LIST}
}
const clientType = {
  type: 'list',
  name: 'clientType',
  message: `请选择项目类型       `,
  choices: Object.keys(temList)
}

module.exports = clientType
