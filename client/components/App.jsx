import React from 'react'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'

import RegisterRoutes from './RegisterRoutes'
import UserRoutes from './UserRoutes'

function App() {
  return (
    <>
      <IfNotAuthenticated>
        <RegisterRoutes />
      </IfNotAuthenticated>
      <IfAuthenticated>
        <UserRoutes />
      </IfAuthenticated>
    </>
  )
}

export default App

// return (
//   <Logo />

//   <Routes>
//     <Route path='/' element={<Swipey/>}/>
//     <Route path='/profile' element={<Profile/>}/>
//     <Route path='/msg' element={<Msg/>}/>
//   </Routes>
//   <Nav/>

// )
