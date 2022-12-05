import React from 'react'
import { Link } from 'react-router-dom'

function AddPhotos() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="snap-x text-black text-xl font-bold ...">
          <div className="snap-center py-11 mt-11">
            Add a photo of car and info about car
          </div>
        </div>
        <input
          className="w-[99vw] mt-5 bg-blue-200 border-solid border-black border-b-2 px-14 text-lg"
          placeholder="eg. Mercedes E63s AMG 660HP"
        />
        <div>
          <div className="justify-items-center">
            <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full flex mt-1 mb-6 px-8 text-center px-4 py-2">
              <h3>Add Photos</h3>
            </button>
          </div>
          <div className="h-36 bg-blue-200"></div>
        </div>
        <Link to="/instructions">
          <button className="border-solid border-2 px-2 py-2 my-5 border-white rounded-3xl text-center text-lg bg-gradient-to-r from-sky-400 to-indigo-400  ">
            Continue to Instructions
          </button>
        </Link>
      </div>
    </>
  )
}

export default AddPhotos
