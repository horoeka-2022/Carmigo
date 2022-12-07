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
          <p className="justify-self-center font-bold text-sm mt-2 text-gray-700">
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
          <p className="justify-self-center font-bold text-sm mt-2 text-gray-700">
            Edit Profile
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center w-20 h-20 bg-slate-100 hover:bg-blue-200 text-5xl hover:scale-105 rounded-full">
            <Link to="/settings" className="justify-center items-center">
              <i className="justify-center items-center text-5xl text-gray-400">
                <MdLogout className="hover:scale-125" />
              </i>
            </Link>
          </div>
          <p className="justify-self-center font-bold text-sm mt-2 text-gray-700">
            Log Out
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold mt-16 text-center text-yellow-300 underline">
          Get CarMigo Gold
        </div>
        <div className="mt-6 text-lg">See who Likes your car & more!</div>
        <button className="hover:scale-105 border-solid border-2 px-20 py-3 my-5 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400">
          Get CarMigo Gold
        </button>
      </div>
    </div>
    // <>
    //   <div className="flex w-screen my-2 justify-center p-20 bg-blue-300">
    //     <div className="justify-center">

    //       <div className="flex flex-row justify-between">
    //         <div className="justify-self-start bg-white settings hover:bg-blue-200 text-5xl hover:scale-105 rounded-full w-20 h-20 p-4">
    // <Link to="/s<Link to="/editprofile">
    //   <i className="justify-self-center edit profile text-5xl">
    //     <FaEdit className="hover:scale-125" />
    //     <p className="font-bold text-sm mt-5">Edit Profile</p>
    //   </i>
    // </Link>-20 h-20 p-4 pl-5">
    // <Link to="/editprofile">
    //   <i className="justify-self-center edit profile text-5xl">
    //     <FaEdit className="hover:scale-125" />
    //     <p className="font-bold text-sm mt-5">Edit Profile</p>
    //   </i>
    // </Link>
    //         </div>
    //         <div className="justify-self-end bg-white settings  hover:bg-blue-200 hover:scale-105 text-5xl rounded-full w-20 h-20 p-4 pr-5">
    // <Link to="/" onClick={handleLogoff}>
    //   <i className="justify-self-end edit profile text-5xl">
    //     <BiLogOut className="hover:scale-125" />
    //     <p className="font-bold text-sm mt-5">Log Out</p>
    //   </i>
    // </Link>
    //         </div>
    //       </div>
    // <div className="text-center">
    //   <div className="text-xl font-bold mt-16 text-center">
    //     Get CarMigo Gold
    //   </div>
    //   <div className="mt-6 text-lg">See who Likes your car and more!</div>
    //   <button className="hover:scale-105 px-12 py-1 my-5 rounded-3xl text-center text-l bg-gradient-to-r from-sky-400 to-indigo-400">
    //     <h3 className="whitespace-nowrap">Get CarMigo Gold</h3>
    //   </button>
    // </div>
    //     </div>
    //     <div className="h-36"></div>
    //   </div>
    // </>
  )
}

export default ProfilePage
