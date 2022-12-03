import React from 'react'
import { IoCarSportSharp, TiMessages, AiOutlineUser } from 'react-icons/all'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="flex w-screen h-[7vh] my-2 flex-row justify-center items-center">
        <div className="flex w-screen justify-around items-center">
          <Link to="/">
            <i className="text-5xl">
              <IoCarSportSharp />
            </i>
          </Link>
          <Link to="/msg">
            <i className="text-5xl">
              <TiMessages />
            </i>
          </Link>
          <Link to="/profile">
            <i className="text-5xl">
              <AiOutlineUser />
            </i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer
