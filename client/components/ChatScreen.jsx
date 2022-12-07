import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'

const socket = io()
function ChatScreen() {
  const [input, setInput] = useState()
  let searchName = useParams().name
  const [messages, setMessages] = useState(
    [
      {
        name: 'George',
        profilePic:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        message: 'Hi',
      },
      {
        name: 'George',
        profilePic:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        message: 'Nice to meet you!',
      },
      {
        name: 'George',
        profilePic:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        message: 'I like your car. What are the specs?',
      },
      {
        name: 'George',
        profilePic:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        message: 'If you would like we should do a car meet up sometime.',
      },
      {
        name: 'George',
        profilePic:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        message: 'Let me know if you are keen.',
      },
      {
        name: 'George',
        profilePic:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        message: 'Thanks',
      },
      {
        name: 'Mike',
        message: 'Saab FTW!',
        profilePic:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        name: 'Jess',
        message: 'Howdy!?',
        profilePic:
          'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        name: 'Jane',
        message: 'Cool car!',
        profilePic:
          'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
    ].filter((message) => message.name === searchName)
  )

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  function handleSend(e) {
    setMessages([
      ...messages,
      {
        message: input,
        name: 'Frances',
        profilePic: '../../server/public/images/frances2.png',
      },
    ])
    socket.emit('chat message', input)
    setInput('')
  }

  function handleKeyUp(e) {
    e.key === 'Enter' ? handleSend() : null
  }

  return (
    <div className="bg-white w-screen h-full justify-between flex flex-col">
      <div className="overflow-auto">
        <div className="overflow-auto">
          {messages.map((message) =>
            message.name !== 'Frances' ? (
              <div key="" className="flex flex-row items-center my-1">
                <img
                  className="h-[7vh] w-[7vh] rounded-2xl bg-cover bg-center m-2"
                  src={message.profilePic}
                  alt="from"
                />
                <div className="max-w-[30vh] bg-slate-200 p-2 rounded-xl break-words text-clip overflow-hidden">
                  <p>{message.message}</p>
                </div>
              </div>
            ) : (
              <div
                key=""
                className="flex flex-row justify-end items-center my-1"
              >
                <div className="max-w-[30vh] bg-yellow-200 p-2 rounded-xl break-words text-clip overflow-hidden">
                  <p>{message.message}</p>
                </div>
                <img
                  className="h-[7vh] w-[7vh] rounded-2xl bg-cover bg-center m-2"
                  src={message.profilePic}
                  alt="to"
                />
              </div>
            )
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <div className="flex flex-row justify-between items-center border-2 border-solid border-slate-300 rounded-lg">
        <div className="flex grow ">
          <input
            value={input}
            onChange={(x) => setInput(x.target.value)}
            className="flex grow m-2 focus:outline-none"
            placeholder="type a message..."
            onKeyUp={handleKeyUp}
            type="text"
          />
        </div>
        <div>
          <button
            onClick={handleSend}
            type="submit"
            className="m-2 text-blue-500 underline font-bold"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatScreen
