const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url,true);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Processed: ${reqUrl.search}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
