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
        <div className=' flex text-gray-200'>
          <GroupsIcon />
          <ReplayIcon/>
          <MessageIcon />
          <MoreVertIcon />
        </div>

      </div>

    </div>
  )
}

export default ContactList