import React, { useState } from 'react'
import style from '../MasterCard2/MasterCard.module.css'
export default function MasteerCard2({img}:{img:string}) {
  let {container,card,border,info,name}=style
  let[enter,setenter]=useState(false)
// let img=`https://i.pinimg.com/564x/9c/bf/f3/9cbff31fe90e1dd97e25a9e993a9f0f1.jpg`
  return (
    
    <div className={container} onMouseEnter={()=>setenter(true)} onMouseLeave={()=>setenter(false)}>
      <div className={card} style={enter?{background:`url(${img}) left center no-repeat`,backgroundSize:"600px"}:{background:`url(${img}) center center no-repeat`,backgroundSize:"380px"}}>
        <div className={border}>
            <h2 className={name}>Elon musk</h2>
            <div className={info}>
                Description
            </div>
        </div>
      </div>
    </div>
  )
}
