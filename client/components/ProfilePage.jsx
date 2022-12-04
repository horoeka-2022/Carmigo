import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function ProfilePage() {
  const { logout } = useAuth0()
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }
  return (
    <>
      <div className="snap-x ...">
        <div className="snap-center py-11 mt-11">
          <img
            className="justify-self-auto w-36 h-36 shrink-0 grow-0 rounded-full"
            src="https://www.autocar.co.nz/wp-content/uploads/2022/08/2023-Aston-Martin-V12-Vantage-Roadster-00002-1140x570.jpg"
          ></img>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 justify-items-center">
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
            Settings
          </button>
          <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
            <h3>Edit Profile</h3>
          </button>
          <Link to="/" onClick={handleLogoff}>
            <button className="bg-blue-400 border-2 border-blue-300 text-white rounded-full decoration-solid flex justify-self-center mt-4 mb-4 gap-9 px-9 border-2 w-min">
              <h3>Sign Out</h3>
            </button>
          </Link>
        </div>
        <div className="h-36 bg-blue-200"></div>
      </div>
    </>
  )
}

export default ProfilePage
