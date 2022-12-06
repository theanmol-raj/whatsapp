import React from 'react'




function ContactCard(props){


  return (
    <div className='text-gray-500 hover:bg-gradient-to-tr from-purple-500 to-yellow-400 border-t py-3 border-slate-700 text-sm'>
        <div className=' flex justify-between mx-4'>
            <div className=' flex space-x-2 items-center'>
                <img className=' rounded-full h-12 w-12' alt='' src={props.showImg} />
                <div>
                    <p className=' text-white text-base'>{props.showName}</p>
                    <p className=' text-gray-400'> Your message was deleted</p>
                </div>
            </div>
            <div>
                <p className='text-xs '>12:00</p>
            </div>
        </div>
    </div>
  )
}

export default ContactCard