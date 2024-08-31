import React from 'react';

const Panel1Edit = () => {
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
                    <h3 className="font-sans font-[400] text-[64px] w-1/2 text-left">
                        фото:
                    </h3>
                    <ImageUpload
                        reset={resetImg}
                        seturl={setImgurl}
                        editImg={ReduxState.editData.data.img_url}
                    />
                </div>
                <div className="flex flex-col w-full px-12">
                    <label
                        htmlFor=""
                        className="font-sans font-[400] text-[44px]  "
                    >
                        имя
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={nameInpRef}
                        className=" bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
                    />
                </div>
                <div className="flex flex-col w-full px-12">
                    <label
                        htmlFor=""
                        className="font-sans font-[400] text-[44px]  "
                    >
                        имaaaaя
                    </label>
                    <input
                        type="text"
                        name=""
                        id=""
                        ref={philosofyInpRef}
                        className=" bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]"
                    />
                </div>
                <div className=" flex flex-row px-12 pt-5">
                    <div>
                        <h1 className="font-sans font-[400] text-[24px] ">
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
                                    {styles.map((item: StyleType) => (
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
                    </div>

                    <div className=" flex flex-row gap-2 pl-4">
                        {styleList?.map((item: StyleType) => (
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
                            onEdit();
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
        </div>
    );
};

export default Panel1Edit;
