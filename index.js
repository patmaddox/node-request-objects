const http = require('http');
const port = 3001;
const date = require('./date')
const sleep = require('sleep')

const requestHandler = (request, response) => {
  var date1 = new date()
  sleep.sleep(1)
  var date2 = new date()

  response.end(date1.date + '\n' + date2.date)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
