import React from 'react';
interface Props {
    text: string;
    color: 'gray' | 'black';
    action: any;
}
export default function Mainbtn({ text, color, action }: Props) {
    return (
        <button
            onClick={() => action()}
            className={
                color === 'gray'
                    ? ` bg-[#D1D1D1] text-black w-[280px] h-[60px] font-sans text-[16px]  font-[800] `
                    : `bg-black text-white w-[280px] h-[60px] font-sans text-[16px]  font-[800]`
            }
        >
            {text}
        </button>
    );
}
