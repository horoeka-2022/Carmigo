import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { MdLogout, MdSettings, MdEdit } from 'react-icons/all'

function ProfilePage() {
  const { logout } = useAuth0()
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <img
          className="justify-self-center max-h-[35vh] max-w-[35vh] rounded-full"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGKRhR1FSrHXw/profile-displayphoto-shrink_800_800/0/1583271038766?e=2147483647&v=beta&t=q_AISORGqN9fK6wGhQSbpxHDjxUeUk3B5zbNRM6UOdU"
          alt="profileImage"
        />
      </div>
      <div className="flex flex-row justify-around mt-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center w-20 h-20 bg-slate-100 hover:bg-blue-200 text-5xl hover:scale-105 rounded-full">
            <Link to="/settings" className="justify-center items-center">
              <i className="justify-center items-center text-5xl text-gray-400">
                <MdSettings className="hover:scale-125" />
              </i>
            </Link>
          </div>
          <p className="justify-self-center font-bold text-med mt-2 text-gray-700">
            Settings
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center w-20 h-20 bg-slate-100 hover:bg-blue-200 text-5xl hover:scale-105 rounded-full mx-5">
            <Link to="/settings" className="justify-center items-center">
              <i className="justify-center items-center text-5xl text-gray-400">
                <MdEdit className="hover:scale-125" />
              </i>
            </Link>
          </div>
          <p className="justify-self-center font-bold text-med mt-2 text-gray-700">
            Edit Profile
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center w-20 h-20 bg-slate-100 hover:bg-blue-200 text-5xl hover:scale-105 rounded-full">
            <Link
              to="/"
              className="justify-center items-center"
              onClick={handleLogoff}
            >
              <i className="justify-center items-center text-5xl text-gray-400">
                <MdLogout className="hover:scale-125" />
              </i>
            </Link>
          </div>
          <p className="justify-self-center font-bold text-med mt-2 text-gray-700">
            Log Out
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold mt-16 text-center text-yellow-300 underline">
          Get CarMigo Gold
        </div>
        <div className="mt-6 text-lg">See who Likes your car & more!</div>
        <button className="hover:scale-105 border-solid border-2 px-16 py-3 my-5 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400">
          Get CarMigo Gold
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
