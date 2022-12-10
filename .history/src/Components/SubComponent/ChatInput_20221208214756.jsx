import React from 'react'

function ChatInput() {
  return (
    <div>
        <div className=' flex justify-between items-center p-3 px-4 bg-slate-700'>
        <div className='flex items-center space-x-3 '>
        <div>
        <p className=' text-gray-300 font-light leading-3 text-xs'>last Online 9 days ago </p>
        </div>

        </div>
        <div className=' flex text-gray-300 text-lg space-x-3'>
          {/* <GroupsIcon fontSize='inherit' />
          <ReplayIcon fontSize='inherit' />
          <MessageIcon fontSize='inherit' />
          <MoreVertIcon fontSize='inherit' /> */}
        </div>

      </div>
    </div>
  )
}

export default ChatInput