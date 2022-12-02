import React from 'react'
import { IoCarSportSharp, TiMessages } from 'react-icons/all'

function Footer() {
  return (
    <>
      <div className="h-1/6 flex justify-center items-end">
        <div className="flex justify-center mt-96 mb-4 gap-9 px-9 border-2 mr-14 w-min">
          <IoCarSportSharp size={77} />
          <img
            className="object-contain h-14 w-14 mt-3 rounded-xl"
            src="../../server/public/images/logo.png"
          />
          <TiMessages size={77} />
        </div>
      </div>
    </>
  )
}

export default Footer
