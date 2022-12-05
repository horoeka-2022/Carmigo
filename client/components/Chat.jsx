import React from 'react'
import { Link } from 'react-router-dom'

function Chat({ name, profilePic, message, timestamp }) {
  return (
    <div className="flex w-screen h-40 border flex-row justify-center items-center bg-white">
      <div className="flex w-screen justify-around items-center">
        <img
          className="h-30 w-20 justify-self-start rounded-full"
          src={profilePic}
        />
        <Link to={`/msg/${name}`}>
          {/* WILL NEED TO CHANGE THE ROUTE LATER */}
          <button>
            <div className="justify-self-start font-bold">
              <h2>{name}</h2>
            </div>
          </button>
        </Link>
        <div className="py-10 text-gray-500">
          <p>{message}</p>
        </div>
        <p className="chat_timestamp gray text-gray-300">{timestamp}</p>
      </div>
    </div>
  )
}

export default Chat
