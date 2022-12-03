import React from 'react'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'
import HomePage from './HomePage'
import UserRoutes from './UserRoutes'

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
