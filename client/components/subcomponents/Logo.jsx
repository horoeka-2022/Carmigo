import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <>
      <div className="h-[7vh] mt-3 justify-center items-center">
        <Link to="/swipe">
          <img
            className="h-full w-full justify-center"
            src="../../logo.png"
            alt="logo"
          />
        </Link>
      </div>
    </>
  )
}

export default Logo
