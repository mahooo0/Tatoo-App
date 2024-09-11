import React from 'react';
import Mainbtn from './Mainbtn';
import Image from 'next/image';
import ColseIcons from '../../public/svg/Close.svg';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { DeleteMasters, DeleteStyle, DeleteTatoo } from '@/Services';
interface Props {
    Show: boolean;
    setShow: (par: boolean) => void;
    collectionName: string;
    id: string;
}

export default function DeletePanlet(Props: Props) {
    let { Show, setShow, collectionName, id } = Props;
    const MAsterDelete = useMutation({
        mutationFn: DeleteMasters,
        onSuccess: () => {
            toast.success('master successfully deleted!');
            setShow(false);
        },
        onError: (error: Error) => {
            alert(`An error occurred: ${error.message}`);
        },
    });
    const TatooDelete = useMutation({
        mutationFn: DeleteTatoo,
        onSuccess: () => {
            //   alert('atr successfully deleted!');
            toast.success('atr successfully deleted');
            setShow(false);
        },
        onError: (error: Error) => {
            alert(`An error occurred: ${error.message}`);
        },
    });
    const StyleDelete = useMutation({
        mutationFn: DeleteStyle,
        onSuccess: () => {
            //   alert('User successfully added!');
            toast.success('Style successfully deleted');
            setShow(false);
        },
        onError: (error: Error) => {
            alert(`An error occurred: ${error.message}`);
        },
    });
    const OnSubmit = () => {
        switch (collectionName) {
            case 'Masters':
                MAsterDelete.mutate(id);

                break;
            case 'Tatoos':
                TatooDelete.mutate(id);
                break;
            case 'Styles':
                StyleDelete.mutate(id);
                break;
        }
    };
    return (
        <div
            className=" w-full h-[100vh]   fixed top-0   left-0  flex justify-center items-center text-center"
            style={
                Show
                    ? { background: 'hsla(0, 0%, 0%, 0.7)' }
                    : { display: 'none' }
            }
        >
            <div className=" relative bg-white w-2/5 h-[260px]">
                <h1 className=" text-black text-[36px] font-sans font-[400] p-9">
                    Вы уверены что хатите удалить этот обект
                </h1>
                <div className=" flex flex-row gap-8  justify-center mt-">
                    <button
                        className="bg-grey text-black w-[200px] h-[50px] font-sans text-[24px]  font-[600]"
                        onClick={() => setShow(false)}
                    >
                        Cansel
                    </button>
                    <button
                        className="bg-black text-white w-[200px] h-[50px] font-sans text-[24px]  font-[600]"
                        onClick={OnSubmit}
                    >
                        Delete
                    </button>
                </div>
                <div className=" absolute top-3 right-3 cursor-pointer">
                    <Image
                        src={ColseIcons}
                        alt="close"
                        width={32}
                        height={32}
                        onClick={() => setShow(false)}
                    />
                </div>
            </div>
        </div>
    );
}
