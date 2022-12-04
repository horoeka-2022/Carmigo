import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './subcomponents/Footer'
import ProfilePage from './ProfilePage'
import Register from './Register'
import Logo from './subcomponents/Logo'
import SwipePage from './SwipePage'
import Instructions from './Instructions'
import Chats from './Chats'
import AddPhotos from './AddPhotos'
import { getUser } from '../api'

function UserRoutes() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => getUser(token))
      .then((userInDb) => {
        userInDb.tutorialCompleted
          ? navigate('/swipe')
          : userInDb.firstName
          ? navigate('/register')
          : navigate('/addphotos')
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center overflow-hidden bg-blue-200">
      <Logo />
      <div className="flex h-[78vh] justify-center items-center overflow-hidden">
        <Routes>
          <Route path="/swipe" element={<SwipePage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chats" element={<Chats />} />
          {/*TODO: create MessagePage component*/}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addphotos" element={<AddPhotos />} />
        </Routes>
      </div>
      <div className="bg-blue-200">
        <Footer />
      </div>
    </div>
  )
}

export default UserRoutes
