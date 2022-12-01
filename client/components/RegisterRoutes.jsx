import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { IfNotAuthenticated } from './Authenticated'
import SignIn from './SignIn'

function RegisterRoutes() {
  return (
    <IfNotAuthenticated>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<></>} />
      </Routes>
    </IfNotAuthenticated>
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
