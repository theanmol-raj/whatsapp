import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

function Homescreen() {
  const [active ,setActive] = useState(null)
  console.log(active)
  return (
    <div className=' w-full max-w-[95rem] grid grid-cols-4 h-screen bg-red-500 mx-auto'>
        {/* Contact List */}
            <ContactList setContact={setActive} />
        {/* Message Box */}
            <ChatScreen />

    </div>
  )
}

export default Homescreen