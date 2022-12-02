import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './Footer'

function UserRoutes() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => getUser(token))
      .then((userInDb) => {
        userInDb ? navigate('/') : navigate('/register')
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="container">
      <Logo />
      <Routes>
        <Route path="/" element={<SwipePage />} />
        {/* SwipePage done by Richard */}
        <Route path="/msg" element={<MessagePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default UserRoutes
