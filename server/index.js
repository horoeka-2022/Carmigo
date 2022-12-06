const server = require('./server')
const { createServer } = require('http')
const app = createServer(server)
const { Server } = require('socket.io')
const io = new Server(app, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const port = process.env.PORT || 3001

io.on('connection', (socket) => {
  console.log(socket.id)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})
