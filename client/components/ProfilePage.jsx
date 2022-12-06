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
      <div className="flex w-screen my-2 justify-center mt-20 p-20 bg-blue-300">
        <div>
          <div className="snap-x">
            <img
              className="snap-center mt-20 scale-125 mb-12 rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGKRhR1FSrHXw/profile-displayphoto-shrink_800_800/0/1583271038766?e=2147483647&v=beta&t=q_AISORGqN9fK6wGhQSbpxHDjxUeUk3B5zbNRM6UOdU"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="justify-self-start bg-white settings hover:bg-blue-200 text-5xl hover:scale-105 rounded-full w-20 h-20 p-4">
              <Link to="/settings">
                <i className="b">
                  <MdSettings className="hover:scale-125" />
                  <p className="font-bold text-sm mt-5">Settings</p>
                </i>
              </Link>
            </div>
            <div className="mt-14 justify-self-center bg-white settings hover:bg-blue-200 hover:scale-105 text-5xl rounded-full w-20 h-20 p-4 pl-5">
              <Link to="/editprofile">
                <i className="justify-self-center edit profile text-5xl">
                  <FaEdit className="hover:scale-125" />
                  <p className="font-bold text-sm mt-5">Edit Profile</p>
                </i>
              </Link>
            </div>
            <div className="justify-self-end bg-white settings  hover:bg-blue-200 hover:scale-105 text-5xl rounded-full w-20 h-20 p-4 pr-5">
              <Link to="/" onClick={handleLogoff}>
                <i className="justify-self-end edit profile text-5xl">
                  <BiLogOut className="hover:scale-125" />
                  <p className="font-bold text-sm mt-5">Log Out</p>
                </i>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold mt-16 text-center">
              Get CarMigo Gold
            </div>
            <div className="mt-6 text-lg">See who Likes your car and more!</div>
            <button className="hover:scale-105 px-12 py-1 my-5 rounded-3xl text-center text-l bg-gradient-to-r from-sky-400 to-indigo-400">
              <h3 className="whitespace-nowrap">Get CarMigo Gold</h3>
            </button>
          </div>
        </div>
        <div className="h-36"></div>
      </div>
    </>
  )
}

export default ProfilePage
