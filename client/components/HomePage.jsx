import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function HomePage() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleTrouble() {
    alert("Sorry Can't help ya")
  }

  return (
    <>
      <section className="h-screen w-screen flex flex-col bg-blue-500 text-white items-center">
        <div className="flex flex-col h-full w-full justify-center items-center">
          <img className="h-25 w-72 justify-center" src="logo.png" alt="logo" />
        </div>
        <nav className="flex flex-col justify-end  gap-4 mb-8">
          <Link
            to="/"
            onClick={handleRegister}
            className="border-solid border-2 px-20 py-2 border-white bg-slate-100 text-black text-xl rounded-3xl text-center "
          >
            Create Account
          </Link>
          <Link
            to="/"
            onClick={handleSignIn}
            className="border-solid border-2 px-20 py-2 border-white rounded-3xl text-center text-xl underline hover:bg-zinc-600"
          >
            Sign In
          </Link>
        </nav>
        <button className="underline mb-5" onClick={handleTrouble}>
          Trouble signing in?
        </button>
      </section>
    </>
  )
}

export default HomePage
