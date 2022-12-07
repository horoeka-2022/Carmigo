import React from 'react'
import { Link } from 'react-router-dom'

function Tutorial() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="snap-x ...">
          <div className="snap-center py-11 mt-11">
            <img
              className="object-contain h-60 w-60 justify-center"
              src="logo3.png"
            />
          </div>
        </div>
        <div className="text-center text-2xl text-black decoration-solid font-bold mb-2">
          <h3>Let's get you ready!</h3>
        </div>
        <div className="text-center text-xl text-black decoration-solid">
          <p>Here's everything you need to know</p>
        </div>
        <Link to="/demo">
          <div className="h-min grid grid-cols-1 justify-items-center mt-20">
            <button className="border-solid border-2 px-14 py-2 my-5 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400 font-black">
              START TUTORIAL
            </button>
          </div>
        </Link>
        <div className="h-36 bg-blue-200"></div>
      </div>
    </>
  )
}

export default Tutorial
