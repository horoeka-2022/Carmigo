const server = require('./server')
// const { createServer } = require('http')
// const app = createServer(server)
// const { Server } = require('socket.io')
// const io = new Server(app)

const port = process.env.PORT || 3001

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})
