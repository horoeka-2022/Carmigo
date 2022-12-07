import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser, createUser } from '../api'

function Register() {
  const { getAccessTokenSilently } = useAuth0()
  const [firstName, setFirstName] = useState('')
  const navigate = useNavigate()

  function handleClick() {
    if (firstName != '') {
      getAccessTokenSilently()
        .then((token) => createUser({ firstName }, token))
        .then(navigate('/addphotos'))
        .catch((err) => console.error(err))
    } else {
      alert('Please fill in your detail')
    }
  }

  function handleChange(e) {
    setFirstName(e.target.value)
  }

  return (
    <div className="flex flex-col h-[50vh] justify-between items-center text-center">
      <div className="font-bold text-6xl mx-4">My first name is</div>
      <div className="w-[80vw] py-2">
        <input
          className="w-[60vw] mt-5 bg-blue-200 border-solid border-black border-b-2 px-4 text-2xl"
          placeholder="eg. John Cena"
          value={firstName}
          onChange={(e) => handleChange(e)}
        />
        <div className="mt-2">This is how it will appear in CarMigo</div>
      </div>
      <div className="my-6 w-[80vw]">
        <button
          onClick={handleClick}
          className="hover:scale-105 border-solid border-2 px-20 py-3 my-5 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400 font-black"
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}

export default Register
