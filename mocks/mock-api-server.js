const jsonServer = require('json-server');

// Import the mock data
const posts = require('./posts')

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

const port = 3001;
server.listen(port, () => {
  console.log(`JSON test server is running at http://localhost:${port}`);
});
