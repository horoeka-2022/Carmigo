import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'
import Footer from './Footer'

function UserRoutes() {

  return (
    <IfAuthenticated>
      <div className="container">
        <Logo />
        <Routes>
          <Route path="/" element={<SwipePage />} />
          <Route path="/msg" element={<MessagePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </IfAuthenticated>
  )
}

export default UserRoutes
