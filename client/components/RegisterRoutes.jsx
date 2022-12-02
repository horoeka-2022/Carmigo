import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { IfNotAuthenticated } from './Authenticated'
import Home from './Home'
import Nav from './Nav'
import SignIn from './SignIn'

function RegisterRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <>
            <Nav />
            <Home />
          </>
        }
      />
      <Route path="/profile" element={<>here is my profile</>} />
    </Routes>
  )
}

export default RegisterRoutes

{
  /* <Route path="/" element={<SignUp />} />
<Route path="/admin/gardens" element={<AdminGardens />} />
<Route path="/admin/gardens/add" element={<AddGarden />} />
<Route path="/admin/gardens/:id/menu" element={<GardenMenu />} />
<Route
  path="/admin/gardens/:id/news/add"
  element={
    <>
      <AdminNav />
      <AddNews />
    </>
  }
/> */
}
