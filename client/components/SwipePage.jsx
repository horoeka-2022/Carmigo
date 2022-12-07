import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function SwipePage() {
  const db = [
    {
      name: 'Supercar Blondie',
      url: '../../server/public/images/super.jpg',
    },
    {
      name: 'Kate',
      url: '../../server/public/images/women.jpg',
    },

    {
      name: 'LiL Baby',
      url: '../../server/public/images/baby.jpg',
    },
    {
      name: 'Nade',
      url: '../../server/public/images/g63.png',
    },
    {
      name: 'Krys',
      url: '../../server/public/images/krys.jpg',
      details: 'I love Holdens!',
    },
    {
      name: 'Tanner',
      url: '../../server/public/images/gtr.jpg',
    },
    {
      name: 'CR7',
      url: '../../server/public/images/cr7.jpg',
      details: 'SUUUUIIIII',
    },
    {
      name: 'Helana',
      url: '../../server/public/images/helana.jpg',
    },

    {
      name: 'Drake',
      url: '../../server/public/images/drake.jpg',
      details: '',
    },
    {
      name: 'Johnny',
      url: '../../server/public/images/johnny.jpg',
      details: 'Nissans are the coolest!',
    },

    {
      name: 'Pop Smoke',
      url: '../../server/public/images/pops.jpg',
      details: 'WOO',
    },
    {
      name: 'Jared',
      url: '../../server/public/images/jared.jpg',
      details: 'Toyotas are the best!',
    },
    {
      name: 'Elvin',
      url: '../../server/public/images/elvin.jpg',
      details: 'Toyota Crown - PinkSlips?',
    },
    {
      name: 'Tate',
      url: '../../server/public/images/ggs.jpg',
      details: 'What colour is your Bugatti?',
    },
    {
      name: 'Hasbulla',
      url: '../../server/public/images/hass.jpg',
    },
    {
      name: 'Clem',
      url: '../../server/public/images/clem.jpg',
    },
    {
      name: 'Paul',
      url: '../../server/public/images/paul.jpg',
      details: 'Dude I Almost Had You!',
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
            <div
              className="flex-auto text-left mt-96 ml-5 pt-40 text-white
              text-3xl text-left mt-96 ml-5"
            >
              <h4 className="flex-auto text-white font-extrabold text-5xl ">
                {character.name}
              </h4>
              <p>{character.details}</p>
            </div>
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
