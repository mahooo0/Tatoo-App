import React, { useEffect, useRef } from 'react';
import Mainbtn from './Mainbtn';
import Image from 'next/image';
import ColseIcons from '../../public/svg/Close.svg';
import { EditStyle, PostStyle } from '@/Services';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/rootReducer';
import { seteditData, setshowpanel3 } from '@/Store/Slices/adminslice';
interface Props {}

function Panel3(props: Props) {
    let styleref = useRef<any>();
    let descref = useRef<any>();
    const dispatch = useDispatch();

    const ReduxState = useSelector((state: RootState) => state?.example);

    if (
        ReduxState?.editData &&
        ReduxState?.editData.ColloctionName === 'Styles'
    ) {
        let editItem = ReduxState?.editData.data;
        styleref.current.value = editItem.name;
        descref.current.value = editItem.desc;
        console.log(editItem);
    }
    let Show = useSelector((state: RootState) => state.example.showpanel3);
    const setShow = (bol: boolean) => {
        dispatch(setshowpanel3(bol));
    };
    const addmutation = useMutation({
        mutationFn: PostStyle,
        onSuccess: (response) => {
            console.log(response);

            // alert('User successfully added!');
            toast.success('art successfully added!');
            setShow(false);
        },
        onError: (error: Error) => {
            alert(`An error occurred: ${error.message}`);
        },
    });
    const Updatemutation = useMutation({
        mutationFn: EditStyle,
        onSuccess: (response) => {
            console.log(response);

            // alert('User successfully added!');
            toast.success('art successfully edited!');
            setShow(false);
        },
        onError: (error: Error) => {
            alert(`An error occurred: ${error.message}`);
        },
    });

    return (
        <div
            className="w-full h-[100vh]   fixed top-0   left-0  flex justify-center items-center"
            style={
                Show
                    ? { background: 'hsla(0, 0%, 0%, 0.7)' }
                    : { display: 'none' }
            }
        >
            <div className="w-1/2 h-fit bg-white opacity-100 relative rounded-3xl">
                <div className="flex flex-col w-full px-12">
                    <label
                        htmlFor=""
                        className="font-sans font-[400] text-[44px] text-black "
                    >
                        Стиль
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className=" bg-[#d9d9d9] text-black h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
                        ref={styleref}
                    />
                </div>
                <div className="flex flex-col w-full px-12">
                    <label
                        htmlFor=""
                        className="font-sans font-[400] text-[44px]  text-black "
                    >
                        опесание
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className=" bg-[#d9d9d9]  text-black h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
                        ref={descref}
                    />
                </div>

                <div className="w-full h-fit flex justify-center mt-5 pb-5">
                    <Mainbtn
                        color="black"
                        text="Submit"
                        action={async () => {
                            let newStyle = {
                                name: styleref.current.value,
                                desc: descref.current.value,
                            };
                            if (
                                ReduxState?.editData &&
                                ReduxState?.editData.ColloctionName === 'Styles'
                            ) {
                                let editItem = ReduxState?.editData.data;
                                Updatemutation.mutate({
                                    id: editItem._id,
                                    body: newStyle,
                                });
                            } else {
                                addmutation.mutate(newStyle);
                            }
                        }}
                    />
                </div>
                <div className=" absolute top-3 right-3 cursor-pointer">
                    <Image
                        src={ColseIcons}
                        alt="close"
                        width={32}
                        height={32}
                        onClick={() => {
                            styleref.current.value = ' ';
                            descref.current.value = ' ';
                            setShow(false);
                            dispatch(seteditData(undefined));
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Panel3;
