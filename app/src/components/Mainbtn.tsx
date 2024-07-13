import React from 'react'
interface Props{
    text:string
    color:"gray"|"black"
    
}
export default function Mainbtn({text,color}:Props) {
    
        return (
            <button className={color==="gray"?` bg-grey text-black w-[320px] h-[60px] font-sans text-[18px]  font-[600] `:`bg-black text-white w-[320px] h-[60px] font-sans text-[18px]  font-[600]`}>
                {text}
            </button>
        )
 

}
