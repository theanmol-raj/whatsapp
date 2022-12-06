import React, { useState } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ChatHead() {
  let temp = useState(0) ;
  
  console.log(temp)
  
  // function inc() {
  //   count ++ ;
  //   console.log(count)
  // }
  return (
    <div>
        <div className=' flex justify-between items-center p-3 px-4 bg-slate-700'>
        <div className='flex items-center space-x-3 '>
        <img className=' rounded-full h-10 w-10' alt='' src="https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRKjHR9ktMhs2HrAksQulr5trvWOTtpB53hlyDh0ZECbw&oe=63986EC2" />
        <div>
        {/* <p className=' text-gray-300 font-semibold '>{count}</p> */}
        <button >add</button>
        <p className=' text-gray-300 font-light leading-3 text-xs'>last Online 9 days ago </p>
        </div>

        </div>
        <div className=' flex text-gray-300 text-lg space-x-3'>
          <GroupsIcon fontSize='inherit' />
          <ReplayIcon fontSize='inherit' />
          <MessageIcon fontSize='inherit' />
          <MoreVertIcon fontSize='inherit' />
        </div>

      </div>
    </div>
  )
}

export default ChatHead