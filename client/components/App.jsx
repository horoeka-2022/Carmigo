import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Profile from './Profile'

function App() {
  return (
    <>
     <div className="App">
     <Header />
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




// <h1>This is the start page</h1>
// <Cards />
// <Buttons />
// <Chats />
// <SingleChat />

