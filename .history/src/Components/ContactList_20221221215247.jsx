import React, { useState } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ReplayIcon from '@mui/icons-material/Replay';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ContactCard from './ContactCard';
import { collection, getDocs } from "firebase/firestore";


function ContactList({user , db, logout , ...props}) {

  // const ContactArray = [ { name : "Arfat" , img : `https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdQ1yNbSZqdVKcnMgMRJIHB1Ir-EPaz0J7QmOLxRvme0eg&oe=639896B0`},
  // { name : "Ejaz" , img : `https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?ccb=11-4&oh=01_AdQ36FheWCyxcYyPJQ-xCOFR58A1-h-HbgN6dFXHd5YssQ&oe=639876BD`},
  // { name : "Jay" , img : `https://pps.whatsapp.net/v/t61.24694-24/309614518_676409680674624_813590369321952386_n.jpg?ccb=11-4&oh=01_AdQbubsmhWacR9EVpPe10W9t9Xm3P9OgNLSLIcnwalFypA&oe=63989C85`}]

  const [ContactArray ,setContactArray] = useState([]) ;

  

  async function getAllUsers(){
    const querySnapshot = await getDocs(collection(db, "cities"));
      querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

  }




  function XYZ(x){
    props.setContact(x)
  }

  


  return (
    <div className=' bg-slate-800 border-r border-gray-500'>
      <div className=' flex justify-between items-center p-[13px] px-4 bg-slate-700'>
        <img className=' rounded-full h-9 w-9' alt='' src={user?.photoURL} />
        <div className=' flex text-gray-300 items-center text-lg space-x-3'>
          <GroupsIcon fontSize='inherit' />
          <ReplayIcon fontSize='inherit' />
          <MessageIcon fontSize='inherit' />
          <button onClick={()=>logout()} className=' flex items-center'><PowerSettingsNewIcon fontSize='inherit' /></button>
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
        {ContactArray.map((item,index) => <button onClick={()=>XYZ(item)} key={index} className=' w-full'><ContactCard showName={item.name} showImg={item.img} /></button> )}
      </div>

    </div>
  )
}

export default ContactList