import React from 'react'

function Loader() {
  return (
    <div className=' flex h-screen justify-center items-center  bg-black'>
        <div className='relative'>
        <img className='' src='https://blog.hubspot.com/hs-fs/hubfs/7a8f8d634013568124e130728834d47a.gif?width=2250&name=7a8f8d634013568124e130728834d47a.gif' />
        <p className=' text-white absolute w-full top-1/2 mx-auto'>Loading</p>
        </div>
        
    </div>
  )
}

export default Loader