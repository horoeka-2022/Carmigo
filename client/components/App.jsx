import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Fruits from './Fruits'

import Nav from './Nav'
import Profile from './Profile'

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <main className="flex items-center justify-center h-screen">
          <Routes>
            <Route path="/" element={<Fruits />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
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
