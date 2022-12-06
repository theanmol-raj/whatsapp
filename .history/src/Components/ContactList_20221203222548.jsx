import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ContactCard from './ContactCard';


function ContactList() {

  const ContactArray = [ { name : "Arfat" , img : `https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQ1yNbSZqdVKcnMgMRJIHB1Ir-EPaz0J7QmOLxRvme0eg&oe=639896B0`} ,
  { name : "" , img : `https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQ1yNbSZqdVKcnMgMRJIHB1Ir-EPaz0J7QmOLxRvme0eg&oe=639896B0`},
  { name : "Arfat" , img : `https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQ1yNbSZqdVKcnMgMRJIHB1Ir-EPaz0J7QmOLxRvme0eg&oe=639896B0`}]










  return (
    <div className=' bg-slate-800'>
      <div className=' flex justify-between items-center p-3 px-4 bg-slate-700'>
        <img className=' rounded-full h-9 w-9' alt='' src="https://pps.whatsapp.net/v/t61.24694-24/158723607_419193396439292_5955373819812020282_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRKjHR9ktMhs2HrAksQulr5trvWOTtpB53hlyDh0ZECbw&oe=63986EC2" />
        <div className=' flex text-gray-300 text-lg space-x-3'>
          <GroupsIcon fontSize='inherit' />
          <ReplayIcon fontSize='inherit' />
          <MessageIcon fontSize='inherit' />
          <MoreVertIcon fontSize='inherit' />
        </div>

      </div>
      <div className=' flex items-center text-gray-300 px-4 py-2 text-lg space-x-2'>
        <div className='flex items-center w-full bg-slate-700 space-x-4 px-2 py-1 rounded-md'>
          <SearchIcon fontSize='inherit' />
          <input placeholder='Search or Start new chat' className=' bg-transparent text-sm w-full' />
        </div>
        <KeyboardDoubleArrowDownIcon fontSize='inherit' />
      </div>

      <div className='mt-4'>
        <ContactCard showName="Arbaz" />
        <ContactCard showName="Arfat" showImg="https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQ1yNbSZqdVKcnMgMRJIHB1Ir-EPaz0J7QmOLxRvme0eg&oe=639896B0" />
        <ContactCard showName="Sumera" />
        <ContactCard showName="Lubna" />
        <ContactCard showName="Ejaz" />
        <ContactCard showName="Misba" />
        <ContactCard showName="Simeen" />
        <ContactCard showName="Farha" />
        <ContactCard showName="Nikhat" />
      </div>

    </div>
  )
}

export default ContactList