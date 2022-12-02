import React from 'react'

function Logo() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col bg-blue-500 text-white justify-between items-center object-top">
        <img className="object-contain w-8/12" src="logo.png" />
        <nav
          className="flex flex-col justify-end  gap-4 mb-4
        "
        ></nav>
      </div>
    </>
  )
}

export default Logo
