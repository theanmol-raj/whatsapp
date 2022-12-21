import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import ChatScreen from '../Components/ChatScreen'
import ContactList from '../Components/ContactList'

function Homescreen({user,db ,logout}) {
  const [active ,setActive] = useState(null)




  return (
    <div className=' w-full max-w-[95rem] grid grid-cols-4 h-screen bg-slate-800 mx-auto'>
        {/* Contact List */}
            <ContactList user={user} db={db} logout={logout} setContact={setActive} />
        {/* Message Box */}
            {/* <ChatScreen p1={active} />  */}
            {/* Boolean operation true & true is always true  , true & false is always false */}
          {active && <ChatScreen db={db} p1={active} />}
            

    </div>
  )
}

export default Homescreen