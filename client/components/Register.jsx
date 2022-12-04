import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  function handleClick() {}

  return (
    <div className="flex flex-col h-[50vh] justify-between items-center text-center">
      <div className="font-bold text-6xl ">My first name is</div>
      <div className="w-[80vw] py-2">
        <input
          className="w-[60vw] mt-5 bg-blue-200 border-solid border-black border-b-2 px-4 text-2xl"
          placeholder="eg. Ahmad"
        />
        <div className="mt-2">This is how it will appear in CarMigo</div>
      </div>
      <div className="my-6 w-[80vw]">
        <Link
          to="/addPhoto"
          onClick={handleClick}
          className="border-solid border-2 px-20 py-2 my-5 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400 "
        >
          CONTINUE
        </Link>
      </div>
    </div>
  )
}

export default Register
