const _ = require('lodash')

const fArr = [1, 2, 3]
const sArr = [4, 5, 6]

console.log(_.concat(fArr, sArr))

const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const path = url.split('?')[0]
  res.end(path)
})

server.listen(3000)