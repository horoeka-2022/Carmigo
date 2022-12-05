import React from 'react'
// import Avatar from '@material-ui/core/Avatar'

function Chat({ name, profilePic, message, timestamp }) {
  return (
    <div className="flex w-screen h-[10vh] border flex-row justify-center items-center bg-white">
      <div className="flex w-screen justify-around items-center">
        <img
          className="h-15 w-10 justify-self-start rounded-full"
          src={profilePic}
        />
        <div className="justify-self-start font-bold">
          <h2>{name} </h2>
        </div>
        <div className="py-10 text-gray-500">
          <p>{message}</p>
        </div>
        <p className="chat_timestamp gray text-gray-300">{timestamp}</p>
      </div>
    </div>
  )
}

export default Chat
