import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ContactList() {
  return (
    <div className=' bg-slate-800'>
      <div className=' flex justify-between'>
        <img className=' rounded-full ' src="https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRKjHR9ktMhs2HrAksQulr5trvWOTtpB53hlyDh0ZECbw&oe=63986EC2" />
        <div className=' flex text-gray-300 text-lg space-x-3'>
          <GroupsIcon fontSize='inherit' />
          <ReplayIcon fontSize='inherit'/>
          <MessageIcon fontSize='inherit' />
          <MoreVertIcon fontSize='inherit' />
        </div>

      </div>

    </div>
  )
}

export default ContactList