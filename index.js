const http = require('http');

const server = http.createServer((request, response) => {
  response.end('hello world!')
}).listen(8888, () => console.log('server running'));
