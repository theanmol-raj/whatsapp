import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ContactList() {
  return (
    <div className=' bg-slate-800'>
      <div className=' flex justify-between'>
        <img src="" />
        <div className=' flex text-gray-300 text-sm space-x-3'>
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