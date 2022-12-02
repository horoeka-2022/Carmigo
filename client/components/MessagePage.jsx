import React, { useState, useEffect } from 'react'
import { connect } from 'socket.io-client'
const socket = connect()

// const socket = io()

function MessagePage() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [lastPong, setLastPong] = useState(null)

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      console.log('disconnect')
      setIsConnected(false)
    })

    socket.on('pong', () => {
      console.log('pong')
      setLastPong(new Date().toISOString())
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('pong')
    }
  }, [])

  const sendPing = () => {
    socket.emit('ping')
  }

  return (
    <div>
      <p>Connected: {'' + isConnected}</p>
      <p>Last pong: {lastPong || '-'}</p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  )
}

export default MessagePage
