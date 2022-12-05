import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
function AddPhotos() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="snap-x text-black text-xl font-bold ...">
          <div className="snap-center py-1">Tell us more about your car</div>
        </div>
        <input
          className="w-screen mt-5 bg-blue-200 border-solid border-black border-b-2 text-center text-lg mb-5"
          placeholder="eg. Mercedes E63s AMG 660HP"
        />
        <div className="grid grid-rows-1 grid-cols-3 gap-2">
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle />
            </i>
          </div>

          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle />
            </i>
          </div>
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle />
            </i>
          </div>
        </div>
      </div>
      <button className="border-solid border-2 px-2 py-2 my-5 border-white rounded-3xl text-center text-lg bg-gradient-to-r from-sky-400 to-indigo-400  ">
        Continue to Instructions
      </button>
    </div>
  )
}

export default AddPhotos
