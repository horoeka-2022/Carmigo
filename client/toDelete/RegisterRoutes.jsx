import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import CreateAccount from '../components/CreateAccount'
import SignIn from '../components/SignIn'

function RegisterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreateAccount />} />
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
