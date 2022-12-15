import React, { useState } from 'react'

function Card() {
    const [data ,setData] = useState({
        fo : '???' ,
        fl : '???'
    })

  return (
    <div className=' bg-white px-6 py-3'>
        <p>{data.fo} Followers</p>
        <p>{data.fl} Following</p>
        <button onClick={()=> setData({fo : '25K' ,
        fl : '400'})}>Click Me</button>
    </div>
  )
}

export default Card