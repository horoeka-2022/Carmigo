import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function SwipePage() {
  console.log('swipe here')
  const db = [
    {
      name: 'Krys',
      url: '../../server/public/images/krys.jpg',
    },
    {
      name: 'Drake',
      url: '../../server/public/images/drake.jpg',
    },
    {
      name: 'Johnny',
      url: '../../server/public/images/johnny.jpg',
    },
    {
      name: 'Helana',
      url: '../../server/public/images/helana.jpg',
    },
    {
      name: 'Pop',
      url: '../../server/public/images/pop.jpg',
    },
    {
      name: 'Jared',
      url: '../../server/public/images/jared.jpg',
    },
    {
      name: 'Tate',
      url: '../../server/public/images/ggs.jpg',
    },
    {
      name: 'Clem',
      url: '../../server/public/images/clem.jpg',
    },
    {
      name: 'Paul',
      url: '../../server/public/images/paul.jpg',
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
      {/* {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )} */}
    </>
  )
}

export default SwipePage
