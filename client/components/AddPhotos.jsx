import React from 'react'
import { Link } from 'react-router-dom'

function AddPhotos() {
  return (
    <>
      <div className="snap-x text-black text-xl ...">
        <div className="snap-center py-11 mt-11">Add a photo of car</div>
      </div>
      <div>
        <div className="h-min border-4 grid grid-cols-3 justify-items-center">
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full flex mt-4 mb-4 px-9 ">
            <h3>Add Photos</h3>
          </button>
        </div>
        <div className="h-36 bg-blue-200"></div>
      </div>
      <Link to="/instructions">
        <button className="border-solid border-2 px-3 py-2 my-5 border-white rounded-3xl text-center text-lg bg-gradient-to-r from-sky-400 to-indigo-400  ">
          Continue to Instructions
        </button>
      </Link>
    </>
  )
}

export default AddPhotos
