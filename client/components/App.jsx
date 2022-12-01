import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Fruits from './Fruits'

import Nav from './Nav'
import Profile from './Profile'
import RegisterRoutes from './RegisterRoutes'
import UserRoutes from './UserRoutes'

function App() {
  return (
    <>
      <RegisterRoutes />
      <UserRoutes />
    </>
  )
}

export default App

// <Header />
// <h1>This is the start page</h1>
// <Cards />
// <Buttons />
// <Chats />
// <SingleChat />
