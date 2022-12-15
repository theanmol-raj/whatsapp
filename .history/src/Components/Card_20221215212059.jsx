import React, { useState } from 'react'

function Card() {
    const [data ,setData] = useState({
        fo : '???' ,
        fl : '???'
    })

  return (
    <div>
        <p>{data.fo} Followers</p>
        <p>{data.fl} Following</p>
    </div>
  )
}

export default Card