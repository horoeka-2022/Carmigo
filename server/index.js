const server = require('./server')
const http = require('http')
const app = http.createServer(server)
const { Server } = require('socket.io')
const io = new Server(app)

const port = process.env.PORT || 3001

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})

io.on('connection', (socket) => {
  console.log('a user connected')
})
