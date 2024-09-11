import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import Mainbtn from './Mainbtn';
import Image from 'next/image';
import ColseIcons from '../../public/svg/Close.svg';
import ImageUpload from './ImageApload';
import { MasterType, StyleType } from '@/Services/Types';
import { useMutation } from '@tanstack/react-query';
import { PostMaster, PutMasters } from '@/Services';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/rootReducer';
import { setshowpanel1 } from '@/Store/Slices/adminslice';
import AddPhotoIcon from '../../public/svg/addPhotoIcons.svg';
import ImageCropper from './ImageCropper';

interface Props {
    styles: any;

    onClose?: (par: any) => void;
}

type Styles = StyleType[];
export default function Panel1(props: Props) {
    let [showstyles, setshowstyles] = useState(false);
    let { styles } = props;
    let [styleList, setstyleList] = useState<Styles>([]);
    let [resetImg, setresetImg] = useState<boolean>(false);
    let [Imgurl, setImgurl] = useState<string>('');
    let [showimagePanel, setshowimagePanel] = useState(false);
    let btnref = useRef<any>();
    let editSectRef = useRef<any>();
    let nameInpRef = useRef<any>();
    let philosofyInpRef = useRef<any>();
    // console.log(editData);
    let dispatch = useDispatch();
    const ReduxState = useSelector((state: RootState) => state?.example);
    let editItem = ReduxState?.editData?.data;
    // console.log(editItem);

    const mutation = useMutation({
        mutationFn: PostMaster,
        onSuccess: () => {
            // alert('User successfully added!');
            toast.success('artist successfully added!');
            nameInpRef.current.value = '';
            philosofyInpRef.current.value = '';
            setstyleList([]);
            setImgurl('');
            dispatch(setshowpanel1(false));
            setshowstyles(false);
            setresetImg((prew) => !prew);
        },
        onError: (error: Error) => {
            alert(`An error occurred: ${error.message}`);
        },
    });

    const addItem = (item: StyleType) => {
        setstyleList((prev) => [...prev, item]);
    };
    const removeItem = (id: number) => {
        setstyleList((prev) => prev.filter((item) => item.id !== id));
    };
    const StyleAction = (item: StyleType) => {
        styleList.includes(item) ? removeItem(item.id) : addItem(item);
    };
    const onSubmit = () => {
        let name = nameInpRef.current.value;
        let desc = philosofyInpRef.current.value;

        let newMater = {
            name,
            desc,
            styles: styleList,
        };
        let body = new FormData();
        body.append('image', Imgurl);
        body.append('json', JSON.stringify(newMater));
        let g = mutation.mutate(body);
        console.log(g);
    };
    const onEdit = () => {
        let name = nameInpRef.current.value;
        let desc = philosofyInpRef.current.value;
        let newMaster = {
            name,
            desc,
            img_url: Imgurl ? Imgurl : ReduxState.editData?.data.img_url,
            styles: styleList,
        };

        let id = ReduxState.editData?.data.id;
        PutMasters(newMaster, id).then(() => {
            console.log('edited');
        });
    };

    // if (
    //     ReduxState.editData &&
    //     ReduxState.editData.ColloctionName === 'Masters'
    // ) {
    //     nameInpRef.current.value = editItem.name;
    //     philosofyInpRef.current.value = editItem.desc;
    //     if (styleList.length === 0) {
    //         setstyleList(editItem.styles);
    //     }
    //     return (
    //         <div
    //             className="w-full h-[100vh]   fixed top-0   left-0  flex justify-center items-center"
    //             style={
    //                 ReduxState.showpanel1
    //                     ? { background: 'hsla(0, 0%, 0%, 0.7)' }
    //                     : { display: 'none' }
    //             }
    //         >
    //             <div className="w-1/2 h-fit bg-white opacity-100 relative">
    //                 <div className=" flex flex-row px-12 pt-5 ">
    //                     <h3 className="text-black font-sans font-[400] text-[64px] w-1/2 text-left">
    //                         фото:
    //                     </h3>
    //                     {/* <ImageUpload
    //                         reset={resetImg}
    //                         seturl={setImgurl}
    //                         editImg={
    //                             Imgurl
    //                                 ? Imgurl
    //                                 : ReduxState.editData?.data.img_url
    //                         }
    //                     /> */}
    //                     <Image src={AddPhotoIcon} alt="AddPhotoIcon" />
    //                 </div>
    //                 <div className="flex flex-col w-full px-12">
    //                     <label
    //                         htmlFor=""
    //                         className=" text-black font-sans font-[400] text-[44px]  "
    //                     >
    //                         имя
    //                     </label>
    //                     <input
    //                         type="text"
    //                         name=""
    //                         id=""
    //                         ref={nameInpRef}
    //                         className="text-black bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
    //                     />
    //                 </div>
    //                 <div className="flex flex-col w-full px-12">
    //                     <label
    //                         htmlFor=""
    //                         className="font-sans font-[400] text-[44px]  tetxt-black"
    //                     >
    //                         имaaaaя
    //                     </label>
    //                     <input
    //                         type="text"
    //                         name=""
    //                         id=""
    //                         ref={philosofyInpRef}
    //                         className=" bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
    //                     />
    //                 </div>
    //                 <div className=" flex flex-row px-12 pt-5">
    //                     <div>
    //                         <h1 className="font-sans font-[400] text-[24px] ">
    //                             стили
    //                         </h1>
    //                         {/* <div className="border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around">
    //                             style{' '}
    //                             <span
    //                                 onClick={() =>
    //                                     setshowstyles((prev) => !prev)
    //                                 }
    //                             >
    //                                 +
    //                             </span>
    //                         </div>

    //                         <div>
    //                             <div
    //                                 className={
    //                                     showstyles ? 'flex flex-col' : 'hidden'
    //                                 }
    //                             >
    //                                 {styles?.map((item: StyleType) => (
    //                                     <div className="border border-black w-[150px] text-center bg-[#d9d9d9] flex justify-around">
    //                                         {item.name}
    //                                         <span
    //                                             onClick={() =>
    //                                                 StyleAction(item)
    //                                             }
    //                                         >
    //                                             {editItem.styles.includes(item)
    //                                                 ? '-'
    //                                                 : '+'}
    //                                         </span>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div> */}
    //                         <div className="flex flex-row">
    //                             <form className="max-w-sm mx-auto">
    //                                 <select
    //                                     onChange={(e) => {
    //                                         console.log(btnref);

    //                                         styleList.some((item) =>
    //                                             item.name === e.target.value
    //                                                 ? (btnref.current.innerHTML =
    //                                                       '-')
    //                                                 : (btnref.current.innerHTML =
    //                                                       '+')
    //                                         );
    //                                     }}
    //                                     ref={editSectRef}
    //                                     id="countries"
    //                                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border--500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring--500 dark:focus:border--500"
    //                                 >
    //                                     {styles.map((item: StyleType) => (
    //                                         <option selected>
    //                                             {item.name}
    //                                         </option>
    //                                     ))}
    //                                 </select>
    //                             </form>
    //                             <button
    //                                 ref={btnref}
    //                                 className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
    //                                 onClick={() => {
    //                                     let styleitem = styles.find(
    //                                         (item: StyleType) => {
    //                                             if (
    //                                                 item.name ===
    //                                                 editSectRef.current.value
    //                                             ) {
    //                                                 return true;
    //                                             }
    //                                         }
    //                                     );
    //                                     let result = styleList.some((item) =>
    //                                         item.name === styleitem.name
    //                                             ? true
    //                                             : false
    //                                     );
    //                                     console.log(result);

    //                                     if (result) {
    //                                         removeItem(styleitem.id),
    //                                             (btnref.current.innerHTML =
    //                                                 '+');
    //                                     } else {
    //                                         addItem(styleitem),
    //                                             (btnref.current.innerHTML =
    //                                                 '-');
    //                                     }
    //                                 }}
    //                             >
    //                                 +
    //                             </button>
    //                         </div>
    //                     </div>

    //                     <div className=" flex flex-row gap-2 pl-4">
    //                         {styleList?.map((item: StyleType) => (
    //                             <div className="w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center">
    //                                 {item.name}
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //                 <div className="w-full h-fit flex justify-center mt-5 pb-5">
    //                     <Mainbtn
    //                         color="black"
    //                         text="Submit"
    //                         action={() => {
    //                             onEdit();
    //                         }}
    //                     />
    //                 </div>
    //                 <div className=" absolute top-3 right-3 cursor-pointer">
    //                     <Image
    //                         src={ColseIcons}
    //                         alt="close"
    //                         width={32}
    //                         height={32}
    //                         onClick={() => dispatch(setshowpanel1(false))}
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
    return (
        <div
            className="w-full h-[700px]   fixed top-0   left-0  flex justify-center items-center"
            style={
                ReduxState.showpanel1
                    ? { background: 'hsla(0, 0%, 0%, 0.7)' }
                    : { display: 'none' }
            }
        >
            <div className="w-1/2 h-fit bg-white opacity-100 relative">
                <div className=" flex flex-row px-12 pt-5 ">
                    <h3 className="text-black font-sans font-[400] text-[64px] w-1/2 text-left">
                        фото:
                    </h3>
                    {/* <ImageUpload reset={resetImg} seturl={setImgurl} /> */}
                    <Image
                        src={Imgurl ? Imgurl : AddPhotoIcon}
                        alt="AddPhotoIcon"
                        width={100}
                        height={100}
                        onClick={() => setshowimagePanel(true)}
                    />
                </div>
                <div className="flex flex-col w-full px-12">
                    <label
                        htmlFor=""
                        className="text-black font-sans font-[400] text-[44px]  "
                    >
                        имя
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={nameInpRef}
                        className=" bg-[#d9d9d9] text-black h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
                    />
                </div>
                <div className="flex flex-col w-full px-12">
                    <label
                        htmlFor=""
                        className=" text-black font-sans font-[400] text-[44px]  "
                    >
                        философия
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={philosofyInpRef}
                        className="text-black bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
                    />
                </div>
                <div className=" flex flex-row px-12 pt-5">
                    <div>
                        <h1 className="font-sans font-[400] text-[24px] text-black ">
                            стили
                        </h1>
                        <div className="flex flex-row">
                            <form className="max-w-sm mx-auto">
                                <select
                                    onChange={(e) => {
                                        console.log(btnref);

                                        styleList.some((item) =>
                                            item.name === e.target.value
                                                ? (btnref.current.innerHTML =
                                                      '-')
                                                : (btnref.current.innerHTML =
                                                      '+')
                                        );
                                    }}
                                    ref={editSectRef}
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring--500 focus:border--500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring--500 dark:focus:border--500"
                                >
                                    {styles?.map((item: StyleType) => (
                                        <option selected>{item.name}</option>
                                    ))}
                                </select>
                            </form>
                            <button
                                ref={btnref}
                                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    let styleitem = styles.find(
                                        (item: StyleType) => {
                                            if (
                                                item.name ===
                                                editSectRef.current.value
                                            ) {
                                                return true;
                                            }
                                        }
                                    );
                                    let result = styleList.some((item) =>
                                        item.name === styleitem.name
                                            ? true
                                            : false
                                    );
                                    console.log(result);

                                    if (result) {
                                        removeItem(styleitem.id),
                                            (btnref.current.innerHTML = '+');
                                    } else {
                                        addItem(styleitem),
                                            (btnref.current.innerHTML = '-');
                                    }
                                }}
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <div
                                className={
                                    showstyles ? 'flex flex-col' : 'hidden'
                                }
                            >
                                {styles?.map((item: StyleType) => (
                                    <div className="border border-black w-[150px] text-center bg-[#d9d9d9] flex justify-around">
                                        {item.name}
                                        <span onClick={() => StyleAction(item)}>
                                            {styleList.includes(item)
                                                ? '-'
                                                : '+'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row gap-2 pl-4">
                        {styleList.map((item: StyleType) => (
                            <div className="w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center">
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-fit flex justify-center mt-5 pb-5">
                    <Mainbtn
                        color="black"
                        text="Submit"
                        action={() => {
                            onSubmit();
                        }}
                    />
                </div>
                <div className=" absolute top-3 right-3 cursor-pointer">
                    <Image
                        src={ColseIcons}
                        alt="close"
                        width={32}
                        height={32}
                        onClick={() => dispatch(setshowpanel1(false))}
                    />
                </div>
            </div>
            <ImageCropper
                show={showimagePanel}
                setimg={setImgurl}
                setclose={setshowimagePanel}
            />
        </div>
    );
}
