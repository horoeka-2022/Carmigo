import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'
import HomePage from './HomePage'
import UserRoutes from './UserRoutes'

const socket = io()

function App() {
  return (
    <>
      <IfNotAuthenticated>
        <HomePage />
      </IfNotAuthenticated>
      <IfAuthenticated>
        <UserRoutes />
      </IfAuthenticated>
    </>
  )
}

export default App
