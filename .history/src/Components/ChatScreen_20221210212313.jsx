import React, { useState } from 'react'
import ChatHead from './SubComponent/ChatHead'
import ChatInput from './SubComponent/ChatInput'
import ChatScroll from './SubComponent/ChatScroll'

function ChatScreen(props) {
  const [messageArray ,setMessageArray] = useState([]) ;

  return (
    <div className=' bg-yellow-400 col-span-3 relative'>
        <div className=' w-full bg-white absolute z-10 top-0'>
            <ChatHead p2={props.p1} />
        </div>
        <div className=' h-screen banner overflow-y-scroll  bg-purple-500'>
              <ChatScroll message={messageArray} />
        </div>
        <div className=' w-full absolute z-10 bottom-0 bg-green-400'>
              <ChatInput />
        </div>
    </div>
  )
}

export default ChatScreen