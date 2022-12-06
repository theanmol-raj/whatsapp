import React from 'react'
import ChatHead from './SubComponent/ChatHead'

function ChatScreen() {


  return (
    <div className=' bg-yellow-400 col-span-3 relative'>
        <div className=' w-full bg-white absolute top-0'>
            <ChatHead />
        </div>
        <div className=' h-full bg-purple-500'>
                chatscreen
        </div>
        <div className=' w-full sticky bottom-0 bg-green-400'>
                Input Box
        </div>
    </div>
  )
}

export default ChatScreen