import React from 'react'
interface Props{
    text:string
    color:"gray"|"black"
    
}
export default function Mainbtn({text,color}:Props) {
    
        return (
            <button className={color==="gray"?` bg-grey text-black w-[400px] h-[100px] font-sans text-[50px]  font-[600] `:`bg-black text-white w-[400px] h-[100px]`}>
                {text}
            </button>
        )
 

}
