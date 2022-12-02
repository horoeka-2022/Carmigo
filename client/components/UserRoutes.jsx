import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import MessagePage from './MessagePage'
import ProfilePage from './ProfilePage'
import Logo from './subcomponents/Logo'
import SwipePage from './SwipePage'

function UserRoutes() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => getUser(token))
      //need to create getUser which get user data from table user_car
      .then((userInDb) => {
        userInDb ? navigate('/') : navigate('/register')
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden border-2 border-solid border-red-400">
      <Logo />
      {/*TODO: create Logo component*/}
      <Routes>
        <Route path="/" element={<SwipePage />} />
        {/* SwipePage done by Richard */}
        <Route path="/msg" element={<MessagePage />} />
        {/*TODO: create MessagePage component*/}
        <Route path="/profile" element={<ProfilePage />} />
        {/*TODO: create ProfilePage component*/}
      </Routes>
      <Footer />
    </div>
  )
}

export default UserRoutes
