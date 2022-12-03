import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function SwipePage() {
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
    {
      name: 'CJ',
      url: '../../server/public/images/4.jpg',
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
      <div className="flex h-[78vh] justify-center items-center overflow-hidden">
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
      </div>
      {/* {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )} */}
    </>
  )
}

export default SwipePage
