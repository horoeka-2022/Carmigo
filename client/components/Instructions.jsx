import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <>
      <div className="snap-x ...">
        <div className="snap-center py-11 mt-11">
          <img
            className="object-contain h-36 w-36 justify-center"
            src="logo3.png"
          />
        </div>
      </div>
      <div className="text-center text-2xl text-black decoration-solid">
        <h3>Let's get you ready!</h3>
      </div>
      <div className="text-center text-xl text-black decoration-solid">
        <p>Here's everything you need to know</p>
      </div>
      <Link to="/swipe">
        <div className="h-min grid grid-cols-1 justify-items-center">
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
            Start Tutorial
          </button>
        </div>
      </Link>
      <div className="h-36 bg-blue-200"></div>
    </>
  )
}

export default Instructions
