import React, { useState } from 'react'
import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

function Homescreen() {
  const [active ,setActive] = useState(null)

  return (
    <div className=' w-full max-w-[95rem] grid grid-cols-4 h-screen bg-red-500 mx-auto'>
        {/* Contact List */}
            <ContactList />
        {/* Message Box */}
            <ChatScreen />

    </div>
  )
}

export default Homescreen