import { defineConfig } from 'vite'
import { Server } from 'socket.io'
import react from '@vitejs/plugin-react'

const serverEvents = (io, socketEvents) => {
  io.on('connection', (socket) => socketEvents(io, socket))
}

const socketEvents = (io, socket) => {
  console.log('socket.io - connection')
  socket.on('disconnect', () => {
    console.log(`socket.io - socket.id \`${socket.id}\` disconnected`)
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
  })
}

const vitePluginSocketIO = (options = {}) => ({
  name: 'socket.io',
  configureServer(server) {
    // initiate default options
    const defaults = { serverEvents, socketEvents }

    // merge defaults with options
    options = Object.assign(defaults, options)

    // create io server
    const io = new Server(server.httpServer)

    // pass io server to serverEvents
    options.serverEvents(io, options.socketEvents)
  },
})

export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== 'test',
    }),
    vitePluginSocketIO(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
