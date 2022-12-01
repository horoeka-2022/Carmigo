import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Fruits from './Fruits'
import Profile from './Profile'
import RegisterRoutes from './RegisterRoutes'
import UserRoutes from './UserRoutes'

function App() {
  return (
    <>
      <RegisterRoutes/>
      <UserRoutes/>
    </>
  )
}

export default App
