import React from 'react'
import { Link } from 'react-router-dom'

function AddPhotos() {
  return (
    <>
      <div className="snap-x text-black text-xl ...">
        <div className="snap-center py-11 mt-11">Add a photo to continue</div>
      </div>
      <div>
        <div className="h-min border-4 grid grid-cols-3 justify-items-center">
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
            Add Photos
          </button>
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
            <h3>Add Photos</h3>
          </button>
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
            <h3>Add Photos</h3>
          </button>
        </div>
        <div className="h-36 bg-blue-200"></div>
      </div>
      <button className=""></button>
    </>
  )
}

export default AddPhotos
