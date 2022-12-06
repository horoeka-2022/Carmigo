import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { BiLogOut, MdSettings, FaEdit } from 'react-icons/all'

function ProfilePage() {
  const { logout } = useAuth0()
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <div>
          <div className="grid grid-rows-1 justify-items-center">
            <img
              className="justify-self-auto w-42 h-36 shrink-0 grow-0 mt-20 scale-125 mb-12"
              src="https://www.koimoi.com/wp-content/new-galleries/2022/08/john-cena-feels-hes-too-old-to-become-wwe-champion-for-17th-time-001.jpg"
            ></img>
            <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
              <i className="text-2xl">
                <MdSettings />
              </i>
              Settings
            </button>
            <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
              <i className="text-2xl">
                <FaEdit />
              </i>
              <h3 className="whitespace-nowrap">Edit Profile</h3>
            </button>
            <Link to="/" onClick={handleLogoff}>
              <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
                <i className="text-2xl">
                  <BiLogOut />
                </i>
                <h3 className="whitespace-nowrap">Sign Out</h3>
              </button>
            </Link>
            <div className=" text-lg mt-16">Get CarMigo Gold</div>
            <div className="mt-6 text-sm">See who Likes your car & more!</div>
            <button className="border-solid border-2 px-12 py-1 my-5 border-white rounded-3xl text-center text-l bg-gradient-to-r from-sky-400 to-indigo-400">
              <h3 className="whitespace-nowrap">Get CarMigo Gold</h3>
            </button>
          </div>
          <div className="h-36"></div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
