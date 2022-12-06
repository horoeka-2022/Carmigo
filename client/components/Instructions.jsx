import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <div className="flex flex-col h-[50vh] justify-between items-center text-center relative">
      <div className="font-bold text-5xl ">Let's get you ready!</div>
      <div className="text-2xl mt-20 ">Here's everything you need to know</div>
      <div className="w-[80vw]">
        <Link to="/demo">
          <button className="border-solid border-2 px-12 py-1 my-20 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400 ">
            Start Demo
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Instructions
