import React from 'react'
import { IoCarSportSharp, TiMessages, AiOutlineUser } from 'react-icons/all'

function Footer() {
  return (
    <>
      <div className="flex w-screen h-[7vh] my-2 flex-row justify-center items-center">
        <div className="flex w-screen justify-around items-center">
          <i className="text-5xl">
            <IoCarSportSharp />
          </i>
          <i className="text-5xl">
            <TiMessages />
          </i>
          <i className="text-5xl">
            <AiOutlineUser />
          </i>
        </div>
      </div>
    </>
  )
}

export default Footer
