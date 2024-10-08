import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EditIcon from '../../../public/svg/editIcon.svg';
import DeleteIcon from '../../../public/svg/deleteIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/rootReducer';
import {
    seteditData,
    setshowpanel1,
    setshowpanel2,
    setshowpanel3,
} from '../../Store/Slices/adminslice';
import Panel3 from '@/components/Panel3';
import { GetMasters, GetStyle, GetTatoo } from '@/Services';
import 'react-toastify/dist/ReactToastify.css';
import Panel1 from '@/components/Panel1';
import {
    DeleteDataType,
    MasterType,
    MasterTypeBase,
    StyleType,
    TatoType,
    TatoTypeBase,
} from '@/Services/Types';
import Panel2 from '@/components/Panel2';
import { ToastContainer } from 'react-toastify';
import DeletePanlet from '@/components/DeletePanlet';
import { shortenText } from '@/Helpers/utils';

export default function index() {
    let [RequestReset, setRequestReset] = useState<boolean>(false);
    let [Data, setData] = useState<any>();
    let [Deleteobj, setDeleteobj] = useState<DeleteDataType>({
        collectionName: '',
        id: '',
    });
    // let [showpanel1,setshowpanel1]=useState(false)
    // let [showpanel2,setshowpanel2]=useState(false)
    // let [showpanel3, setshowpanel3] = useState(false);
    let [Deletepanel, setDeletepanel] = useState(false);
    // let [editData, seteditdata] = useState<any>(null);

    useEffect(() => {
        (async () => {
            let StyleRes = await GetStyle();
            // let MastersRes = await GetMasters();
            // let TatooRes = await GetTatoo();
            let Style = StyleRes.data;
            // let Masters = MastersRes.data;
            // let Tatoo = TatooRes.data;
            let data = {
                Style,
                // Masters,
                // Tatoo,
            };
            setData(data);
        })();
    }, [RequestReset]);
    // console.log(editData);
    const dispatch = useDispatch();
    const ReduxState = useSelector((state: RootState) => state?.example);
    console.log(ReduxState.editData);
    // () => dispatch(setshowpanel1())

    return (
        <>
            <div className="flex flex-col items-center relative">
                <header className="bg-black w-full flex items-center h-[105px] rounded-[32px] text-white text-[48px] font-lobster pl-8 font-[400]">
                    Tatoo App{' '}
                </header>
                <div className=" border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]">
                    <h2 className=" font-lobster font-[400] text-black text-[48px]">
                        Мастера
                    </h2>
                    <button
                        className="w-[200px] h-[48px] bg-black text-white rounded-2xl"
                        onClick={() => dispatch(setshowpanel1(true))}
                    >
                        {' '}
                        добавить
                    </button>
                </div>
                <table className="w-[95%] bg-white  border-black border-4 mt-10">
                    <thead>
                        <tr className=" border-b-2 border-[#868686] ">
                            <th className="w-1/5 border-r border-[#868686] text-black text-[36px] font-sans font-[400]">
                                имя
                            </th>
                            <th className="w-[15%] border-r border-[#868686]  text-black text-[36px] font-sans font-[400]">
                                фото
                            </th>
                            <th className="w-[40%] border-r border-[#868686]  text-black text-[36px] font-sans font-[400]">
                                философия
                            </th>
                            <th className="w-[25%]  text-black text-[36px] font-sans font-[400] ">
                                стиль
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data?.Masters?.map((item: MasterTypeBase) => (
                            <tr className=" border-b-2 border-[#868686] ">
                                <th className="w-1/5 border-r border-[#868686] text-black text-[36px] font-sans font-[400]">
                                    {item.name}
                                </th>
                                <th className="w-[15%] border-r border-[#868686]  ">
                                    <div className="w-full h-full flex justify-center">
                                        {/* <Image src={item.img_url} alt='image' className='w-[70px] h-[108px] '/> */}
                                        <img
                                            src={item.img_url}
                                            alt="image"
                                            className="w-[70px] h-[108px] "
                                        />
                                    </div>
                                </th>
                                <th className="w-[40%] border-r border-[#868686]  text-[#696969] text-[24px] font-sans font-[400]">
                                    {item.desc}
                                </th>
                                <th className="w-[25%]  text-black text-[36px] font-sans font-[400]  ">
                                    <div className="w-full h-full flex flex-row">
                                        <p className="w-4/5 text-[#696969] text-[20px] font-sans font-[700]">
                                            {item.styles.map(
                                                (item: StyleType) =>
                                                    `${item.name} ,`
                                            )}
                                        </p>
                                        <div className="w-1/5 flex flex-row gap-2 pr-4">
                                            <Image
                                                src={EditIcon}
                                                alt="EditIcon"
                                                onClick={() => {
                                                    dispatch(
                                                        seteditData({
                                                            ColloctionName:
                                                                'Masters',
                                                            data: item,
                                                        })
                                                    );
                                                    dispatch(
                                                        setshowpanel1(true)
                                                    );
                                                }}
                                            />
                                            <Image
                                                src={DeleteIcon}
                                                alt="DeleteIcon"
                                                onClick={() => {
                                                    setDeleteobj({
                                                        collectionName:
                                                            'Masters',
                                                        id: item.id,
                                                    }),
                                                        setDeletepanel(true);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className=" border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]">
                    <h2 className=" font-lobster font-[400] text-black text-[48px]">
                        Работы
                    </h2>
                    <button
                        className="w-[200px] h-[48px] bg-black text-white rounded-2xl"
                        onClick={() => dispatch(setshowpanel2(true))}
                    >
                        {' '}
                        добавить
                    </button>
                </div>
                <div className=" mt-6 flex flex-row flex-wrap gap-6 justify-center">
                    {Data?.Tatoo?.map((item: TatoTypeBase) => (
                        <div className="bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center">
                            {/* <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/> */}
                            <img
                                src={item.img_url}
                                alt=""
                                className=" w-[110px]  h-[110px]"
                            />
                            <div className="h-fit ml-2">
                                <h1 className="text-[32px] font-sans text-black font-[600] mb-1">
                                    {item.master}
                                </h1>
                                <p className="text-[24px] text-[#696969] font-sans font-[500]">
                                    {item.style}
                                </p>
                            </div>
                            <div className="w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4">
                                <Image src={EditIcon} alt="EditIcon" />
                                <Image
                                    src={DeleteIcon}
                                    alt="DeleteIcon"
                                    onClick={() => {
                                        setDeleteobj({
                                            collectionName: 'Tatoos',
                                            id: item.id,
                                        }),
                                            setDeletepanel(true);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]">
                    <h2 className=" font-lobster font-[400] text-black text-[48px]">
                        Стили
                    </h2>
                    <button
                        className="w-[200px] h-[48px] bg-black text-white rounded-2xl"
                        onClick={() => dispatch(setshowpanel3(true))}
                    >
                        {' '}
                        добавить
                    </button>
                </div>
                <div className=" mt-6 flex flex-row flex-wrap gap-x-20 gap-y-8 justify-center">
                    {Data?.Style.map((item: any) => (
                        <div className="bg-white relative w-[380px] h-[90px] flex flex-row items-center">
                            <div className="h-fit ml-2">
                                <h1 className="text-[40px] text-black font-sans font-[600] ">
                                    {shortenText(item.name, 15)}
                                </h1>
                                <p className="text-[28px] text-[#696969] font-sans font-[500]">
                                    {shortenText(item.desc, 30)}
                                </p>
                            </div>
                            <div className="w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4">
                                <Image
                                    src={EditIcon}
                                    alt="EditIcon"
                                    onClick={() => {
                                        dispatch(
                                            seteditData({
                                                ColloctionName: 'Styles',
                                                data: item,
                                            })
                                        );
                                        dispatch(setshowpanel3(true));
                                    }}
                                />
                                <Image
                                    src={DeleteIcon}
                                    alt="DeleteIcon"
                                    onClick={() => {
                                        setDeleteobj({
                                            collectionName: 'Styles',
                                            id: item._id,
                                        }),
                                            setDeletepanel(true);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* panel 1*/}
                <Panel1 styles={Data?.Style} />
                {/* panel2 */}
                <Panel2 Styles={Data?.Style} Masters={Data?.Masters} />
                {/* panel3 */}
                <Panel3 />
                {/*Delete panel */}
                <DeletePanlet
                    setShow={setDeletepanel}
                    Show={Deletepanel}
                    collectionName={Deleteobj.collectionName}
                    id={Deleteobj?.id}
                />
            </div>
            <ToastContainer />
        </>
    );
}
