import React from 'react'
import ChatHead from './SubComponent/ChatHead'

function ChatScreen(props) {


  return (
    <div className=' bg-yellow-400 col-span-3 relative'>
        <div className=' w-full bg-white absolute z-10 top-0'>
            <ChatHead active={props.active} />
        </div>
        <div className=' h-screen overflow-y-scroll pt-16 pb-8 o bg-purple-500'>
               
        </div>
        <div className=' w-full absolute z-10 bottom-0 bg-green-400'>
                Input Box
        </div>
    </div>
  )
}

export default ChatScreen