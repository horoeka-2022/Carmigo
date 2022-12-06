import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { Link } from 'react-router-dom'

function Demo() {
  const db = [
    {
      name: '',
      url: '../../server/public/images/pass.png',
    },
    {
      name: '',
      url: '../../server/public/images/like.png',
    },
    {
      name: '',
      url: '../../server/public/images/pass.png',
    },
    {
      name: '',
      url: '../../server/public/images/like.png',
    },
  ]
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <>
      <div className="w-[80vw] ">
        <Link to="/swipe">
          <button className="border-solid border-2 px-6 py-1 border-white rounded-3xl text-center text-xl bg-gradient-to-r from-sky-400 to-indigo-400 ">
            Start Exploring for your new CarMigo!
          </button>
        </Link>
      </div>
      {characters.map((character) => (
        <TinderCard
          className="flex flex-col absolute overflow-hidden"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}
        >
          <div
            style={{ backgroundImage: 'url(' + character.url + ')' }}
            className="flex relative w-screen h-[78vh] justify-center bg-cover bg-center rounded-3xl"
          >
            <h3>{character.name}</h3>
          </div>
        </TinderCard>
      ))}
    </>
  )
}

export default Demo
