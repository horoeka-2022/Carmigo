import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterRoutes from './RegisterRoutes'

function UserRoutes() {
  return (
    <IsUser key="user">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gardens" element={<GardensList />} />
        <Route
          path="/gardens/:id/news"
          element={
            <>
              <UserNav />
              <News />
            </>
          }
        />
        <Route
          sUser>path="/gardens/:id/about"
          element={
            <>
              <UserNav />
              <About />
            </>
          }
        />
        <Route
          path="/gardens/:id/events"
          element={
            <>
              <UserNav />
              <GardenEvents />
            </>
          }
        />
        <Route
          path="/gardens/:id/gallery"
          element={
            <>
              <UserNav />
              <Gallery />
            </>
          }
        />
        <Route
          path="/gardens/:id/shop"
          element={
            <>
              <UserNav />
              <Shop />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </IsUser>
  )
}



export default UserRoutes

