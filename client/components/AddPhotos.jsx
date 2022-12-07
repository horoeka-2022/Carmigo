import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { getUser, updateUser } from '../api'

function AddPhotos() {
  const { getAccessTokenSilently } = useAuth0()
  const [carDescription, setCarDescription] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setCarDescription(e.target.value)
  }

  function handleClick() {
    if (carDescription != '') {
      getAccessTokenSilently()
        .then((token) => updateUser({ carDescription }, token))
        .then(navigate('/tutorial'))
        .catch((err) => console.error(err))
    } else {
      alert('Please fill in your detail')
    }
  }

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="snap-x text-black text-xl font-bold ... absolute top-36">
          <div className="snap-center py-1">Tell us more about your car</div>
        </div>
        <input
          className="w-screen mt-5 bg-blue-200 border-solid border-black border-b-2 text-center text-lg mb-5"
          placeholder="eg. Mercedes E63s AMG 660HP"
          onChange={(e) => handleChange(e)}
          value={carDescription}
        />
        <div className="h-5"></div>
        <div className="grid grid-rows-1 grid-cols-3 gap-2 ">
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative hover:bg-white rounded-xl">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle className="hover:scale-125" />
            </i>
          </div>
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative hover:bg-white rounded-xl">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle className="hover:scale-125" />
            </i>
          </div>
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative hover:bg-white rounded-xl">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle className="hover:scale-125" />
            </i>
          </div>
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative hover:bg-white rounded-xl">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle className="hover:scale-125" />
            </i>
          </div>
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative hover:bg-white rounded-xl">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle className="hover:scale-125" />
            </i>
          </div>
          <div className="w-[30vw] h-[20vh] bg-slate-200 border-dotted border-2 border-black relative hover:bg-white rounded-xl">
            <i className="absolute bottom-0 right-0 text-3xl">
              <AiFillPlusCircle className="hover:scale-125" />
            </i>
          </div>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="border-solid mt-28 border-2 px-7 py-2 my-5  border-white rounded-3xl text-center text-lg bg-gradient-to-r from-sky-400 to-indigo-400 hover:scale-105 absolute bottom-20 "
      >
        <h4 className="font-black"> CONTINUE</h4>
      </button>
    </div>
  )
}

export default AddPhotos
