import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <>
      <div className="h-full overflow-auto">
        <Chat
          name="George"
          message="Thanks"
          timestamp="1 day ago"
          profilePic="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <Chat
          name="Mike"
          message="Saab FTW!"
          timestamp="2 days ago"
          profilePic="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <Chat
          name="Jess"
          message="Howdy!?"
          timestamp="5 days ago"
          profilePic="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <Chat
          name="Jane"
          message="Cool car!"
          timestamp="1 week ago"
          profilePic="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </>
  )
}

export default Chats
