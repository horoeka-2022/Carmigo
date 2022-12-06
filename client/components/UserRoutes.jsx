import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './subcomponents/Footer'
import ProfilePage from './ProfilePage'
import Register from './Register'
import Logo from './subcomponents/Logo'
import SwipePage from './SwipePage'
import Chats from './Chats'
import AddPhotos from './AddPhotos'
import { getUser } from '../api'
import Tutorial from './Tutorial'
import ChatScreen from './ChatScreen'
import Instructions from './Instructions'
import Demo from './Demo'

function UserRoutes() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => getUser(token))
      .then((userInDb) => {
        if (userInDb?.user_metadata?.tutorialCompleted) {
          navigate('/swipe')
        } else if (userInDb?.user_metadata?.addedPhotos) {
          navigate('/tutorial')
        } else if (userInDb?.user_metadata?.firstName) {
          navigate('/addphotos')
        } else {
          navigate('/register')
        }
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center overflow-hidden bg-blue-300">
      <Logo />
      <div className="flex h-[78vh] justify-center items-center overflow-hidden">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/addphotos" element={<AddPhotos />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/swipe" element={<SwipePage />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chats/:name" element={<ChatScreen />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <div className="bg-blue-200">
        <Footer />
      </div>
    </div>
  )
}

export default UserRoutes
