import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import WaitIndicator from './WaitIndicator'

export default function Header() {
  return (
    <header className="w-full bg-lightGreen">
      <WaitIndicator />
      <section className="container lg:flex items-center justify-between mx-auto">
        <Link to="/">
          <img src="loading.jpeg" alt="gardenzlogo" className="w-60" />
        </Link>
        <Nav />
      </section>
    </header>
  )
}
