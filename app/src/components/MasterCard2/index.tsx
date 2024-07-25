import React, { useState } from 'react'
import style from '../MasterCard2/MasterCard.module.css'
export default function MasteerCard2({img}:{img:string}) {
  let {container,card,border,info,name}=style
  let[enter,setenter]=useState(false)
  return (
    
    <div className={container} onMouseEnter={()=>setenter(true)} onMouseLeave={()=>setenter(false)}>
      <div className={card}
       style={enter?{background:`url(${img}) left center no-repeat`,backgroundSize:"600px"}:{background:`url(${img}) center center no-repeat`,backgroundSize:"380px"}}>
        <div className={border}>
            <h2 className={name}>Name</h2>
            <div className={info}>
                Description
            </div>
        </div>
      </div>
    </div>
  )
}
