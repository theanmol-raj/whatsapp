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
    </div>
  )
}

export default Card