import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const { logout, loginWithRedirect, user, isLoading } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout({ returnTo: `${window.location.origin}/signin` })
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <img
        className="object-contain h-52 w-96 absolute inset-x-0 top-0"
        src="logo.png"
      />
      <section className="h-screen flex flex-col bg-blue-500 text-white justify-between items-center pt-44">
        <nav className="flex flex-col justify-end  gap-4 mb-8">
          <IfAuthenticated>
            <Link
              to="/"
              onClick={handleLogoff}
              className="border-solid border-2 px-8 py-2 border-white rounded-3xl hover:bg-zinc-600 absolute top-0 right-0"
            >
              Sign Out
            </Link>
          </IfAuthenticated>
        </nav>
      </section>
    </>
  )
}

export default Nav

///////Second Page////////////
