import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import ProfilePage from './ProfilePage'
import Register from './Register'
import Logo from './subcomponents/Logo'
import SwipePage from './SwipePage'
import Instructions from './Instructions'
import Chats from './Chats'

function UserRoutes() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  // useEffect(() => {
  //   getAccessTokenSilently()
  //     .then((token) => getUser(token))
  //     //need to create getUser which get user data from table user_car
  //     .then((userInDb) => {
  //       userInDb ? navigate('/') : navigate('/register')
  //     })
  //     .catch((err) => console.error(err))
  // }, [])

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center overflow-hidden bg-blue-200">
      <Logo />
      <Routes>
        <Route path="/swipe" element={<SwipePage />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/msg" element={<Chats />} />
        {/*TODO: create MessagePage component*/}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <div className="bg-blue-200">
        <Footer />
      </div>
    </div>
  )
}

export default UserRoutes
