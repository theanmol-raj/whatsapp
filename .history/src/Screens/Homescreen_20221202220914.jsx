import React from 'react'
import ContactList from '../Components/ContactList'

function Homescreen() {
  return (
    <div className=' w-full max-w-[95rem] grid grid-cols-4 h-screen bg-red-500 mx-auto'>
        {/* Contact List */}
            <ContactList />

            

        {/* Message Box */}

    </div>
  )
}

export default Homescreen