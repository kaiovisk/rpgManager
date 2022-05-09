const http = require('http')
const fs = require('fs')

const port = 3000
const hostname = 'localhost'

let handleRequest = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  fs.readFile('./src/index.html', null, function(err, data) {
    if (err) {
      res.setHeader = 404
      res.write('File not found!')
    } else {
      res.write(data)
    }
    res.end()
  })

  fs.readFile('./src/whoami.html', null, function(err, data) {
    if (err) {
      res.setHeader = 404
      res.write('File not found!')
    } else {
      res.write(data)
    }
    res.end()
  })
}

const server = http.createServer(handleRequest)

server.listen(port, hostname, () => {
  console.log('Server running on port 3000!')
})
