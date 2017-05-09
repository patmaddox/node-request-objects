const http = require('http');
const port = 3001;

var date1 = require('./date')
var date2 = require('./date')

const requestHandler = (request, response) => {
  response.end(date1.date + '\n' + date2.date)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
