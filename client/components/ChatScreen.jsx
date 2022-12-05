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
      message: 'Mine is in the garage at the moment',
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
    <div className="bg-white w-screen h-full justify-between flex flex-col">
      <div className="overflow-auto">
        {messages.map((message) =>
          message.name !== 'Frances' ? (
            <div className="flex flex-row items-center my-1">
              <img
                className="h-[7vh] w-[7vh] rounded-2xl bg-cover bg-center m-2"
                alt="from"
                src={message.image}
              />
              <div className="bg-slate-200 p-2 rounded-xl break-words text-clip overflow-hidden">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-end items-center my-1">
              <div className="bg-yellow-200 p-2 rounded-xl break-words text-clip overflow-hidden">
                <p>{message.message}</p>
              </div>
              <img
                className="h-[7vh] w-[7vh] rounded-2xl bg-cover bg-center m-2"
                src={message.image}
                alt="to"
              />
            </div>
          )
        )}
      </div>
      <div className="flex flex-row justify-between items-center border-2 border-solid border-slate-300 rounded-lg">
        <div className="flex grow ">
          <input
            value={input}
            onChange={(x) => setInput(x.target.value)}
            className="flex grow m-2 focus:outline-none"
            placeholder="type a message..."
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

    // <>
    //   <div className=" w-screen h-[78vh] bg-white p-10 justify-center overflow-auto">
    //     <div className="text-gray-400 text-center">
    //       <h2>YOU MATCHED WITH {messages.name} ON 05/12/22</h2>
    //     </div>
    //     <div>
    //       {messages.map((message) =>
    //         message.name !== 'Frances' ? (
    //           <div className="flex py-5 justify-self-end">
    //             <div className="p-2 bg-gray-200 rounded-3xl">
    //               <p>{message.message}</p>
    //             </div>
    //             <img
    //               className="h-5 w-5 justify-self-end rounded-full ml-3"
    //               src={message.image}
    //             />
    //           </div>
    //         ) : (
    //           <div className="flex py-5 justify-self-end">
    //             <img
    //               className="h-5 w-5 justify-self-start rounded-full mr-3"
    //               src={message.image}
    //             />
    //             <div className="p-12 bg-blue-400 rounded-3xl">
    //               <p>{message.message}</p>
    //             </div>
    //           </div>
    //         )
    //       )}
    //       <div className="columns-2 justify-center border-y">
    //         <form>
    //           <input
    //             value={input}
    //             onChange={(x) => setInput(x.target.value)}
    //             className="flex justify-self-start selection:border w-full mb-0"
    //             placeholder="type a message..."
    //             type="text"
    //           />
    //           <button
    //             onClick={handleSend}
    //             type="submit"
    //             className="flex justify-self-end bg-blue-500 border-2 border-blue-400 rounded-3xl p-1 mb-0"
    //           >
    //             SEND
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}

export default ChatScreen
