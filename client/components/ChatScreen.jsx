import React, { useState } from 'react'

function ChatScreen() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'George',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      message: 'Nice car, you have good taste',
    },
    {
      name: 'George',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      message:
        'I really like BMWs, I grew up with a family that owned only BMWs',
    },
    {
      name: 'Frances',
      message: 'Thanks, me too! My first car was an E36',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGKRhR1FSrHXw/profile-displayphoto-shrink_800_800/0/1583271038766?e=2147483647&v=beta&t=q_AISORGqN9fK6wGhQSbpxHDjxUeUk3B5zbNRM6UOdU',
    },
  ])

  const handleSend = (x) => {
    x.preventDefault()

    setMessages([
      ...messages,
      {
        message: input,
        name: 'Frances',
        image:
          'https://media-exp1.licdn.com/dms/image/C4E03AQGKRhR1FSrHXw/profile-displayphoto-shrink_800_800/0/1583271038766?e=2147483647&v=beta&t=q_AISORGqN9fK6wGhQSbpxHDjxUeUk3B5zbNRM6UOdU',
      },
    ])
    setInput('')
  }
  return (
    <>
      <div className=" w-screen bg-white h-screen p-10 justify-center">
        <div className="text-gray-400 text-center">
          <h2>YOU MATCHED WITH GEORGE ON 05/12/22</h2>
        </div>
        <div>
          {messages.map((message) =>
            message.name === 'Frances' ? (
              <div className="flex py-5 justify-self-end">
                <div className="p-12 bg-blue-400 rounded-3xl">
                  <p>{message.message}</p>
                </div>
                <img
                  className="h-30 w-20 justify-self-end rounded-full ml-3"
                  src={message.image}
                />
              </div>
            ) : (
              <div className="flex py-5 justify-self-end">
                <img
                  className="h-30 w-20 justify-self-start rounded-full mr-3"
                  src={message.image}
                />
                <div className="p-12 bg-gray-200 rounded-3xl">
                  <p>{message.message}</p>
                </div>
              </div>
            )
          )}
          <div className="columns-2 justify-center border-y">
            <form>
              <input
                value={input}
                onChange={(x) => setInput(x.target.value)}
                className="flex justify-self-start selection:border w-full mb-0"
                placeholder="type a message..."
                type="text"
              />
              <button
                onClick={handleSend}
                type="submit"
                className="flex justify-self-end bg-blue-500 border-2 border-blue-400 rounded-3xl p-1 mb-0"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatScreen
