import React from 'react'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'

import RegisterRoutes from './RegisterRoutes'
import UserRoutes from './UserRoutes'

function App() {
  return (
    <>
      <UserRoutes />

      {/* <IfNotAuthenticated>
        <RegisterRoutes />
      </IfNotAuthenticated>
      <IfAuthenticated>
        <UserRoutes />
      </IfAuthenticated> */}
    </>
  )
}

export default App
