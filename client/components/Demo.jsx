import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { Link, useNavigate } from 'react-router-dom'

function Demo() {
  const navigate = useNavigate()
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

  function handleClick() {
    navigate('/swipe')
  }

  return (
    <>
      <div onClick={() => handleClick()}>
        <div className="flex justify-center items-center h-60 w-60 bg-gray-900  border-4 border-solid border-slate-200 rounded-full">
          <div className="flex flex-col justify-center items-center w-48 h-48 bg-gray-800 border-4 border-solid border-green-400 rounded-full">
            <div className=" h-3 w-7 rounded-lg bg-green-400 mb-8"></div>
            <div className=" text-white text-3xl font-bold text-center">
              PUSH TO START
            </div>
          </div>
        </div>
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

//   return (
//     <>
//       <div className="">
//         <div className="relative w-60 h-60 bg-gray-900 rounded-full border-4 border-solid border-slate-200">
//           <div className="absolute top-1/6 left-1/6 w-48 h-48 bg-gray-800 rounded-full border-4 border-solid border-green-400 items-center justify-center"></div>
//           <div className="absolute top-1/4 left-1/4 h-3 w-7 rounded-lg bg-green-400"></div>
//           <div className="absolute top-1/4 left-1/4 text-white text-3xl font-bold ">
//             PUSH TO START
//           </div>
//         </div>
//       </div>
//       {characters.map((character) => (
//         <TinderCard
//           className="flex flex-col absolute overflow-hidden"
//           key={character.name}
//           onSwipe={(dir) => swiped(dir, character.name)}
//           onCardLeftScreen={() => outOfFrame(character.name)}
//         >
//           <div
//             style={{ backgroundImage: 'url(' + character.url + ')' }}
//             className="flex relative w-screen h-[78vh] justify-center bg-cover bg-center rounded-3xl"
//           >
//             <h3>{character.name}</h3>
//           </div>
//         </TinderCard>
//       ))}
//     </>
//   )
// }

// export default Demo
