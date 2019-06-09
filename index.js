const _ = require('lodash')

const http = require('http');

const server = http.createServer((request, response) => {
  const nums = []
  _.map(['one', 'two', 'three'], (num) => {
    nums.push(num)
  })
  response.end('hello world! advasfvdsf')
}).listen(8888, () => console.log('server running'));
