import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function CarTinderCards() {
  const db = [
    {
      name: 'Richard Hendricks',
      url: '../../server/public/images/1.jpeg',
    },
    {
      name: 'Erlich Bachman',
      url: '../../server/public/images/2.jpeg',
    },
    {
      name: 'Monica Hall',
      url: '../../server/public/images/3.jpeg',
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
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden border-2 border-solid border-red-400">
      <h1>React Tinder Card</h1>
      <div className="w-11/12 h-5/6 justify-center items-center overflow-hidden border-2 border-solid border-red-400 ">
        {characters.map((character) => (
          <TinderCard
            className="absolute w-full h-5/6 overflow-hidden"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className="relative w-11/12 h-5/6 bg-cover bg-center rounded-3xl"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  )
}

export default CarTinderCards
