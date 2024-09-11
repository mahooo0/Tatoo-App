import React, { useRef } from 'react';
import Mainbtn from '../Mainbtn';
import Cropper from 'react-easy-crop';
import Slider from '../slider';
import getCroppedImg from './cropimage';
interface Props {
    show: boolean;
    setimg: (prop: any) => void;
    setclose: (prop: any) => void;
}
export default function ImageCropper({ show, setimg, setclose }: Props) {
    const [image, setImage] = React.useState<any>(null);
    const [croppedArea, setCroppedArea] = React.useState(null);
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);
    const inpref = useRef<any>();
    const triggerFileSelectPopup = () => inpref.current.click();
    const onCropComplete = (
        croppedAreaPercentage: any,
        croppedAreaPixels: any
    ) => {
        setCroppedArea(croppedAreaPixels);
    };
    const onSelectFile = (event: any) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener('load', () => {
                setImage(reader.result);
            });
        }
    };

    return (
        <div
            style={show ? { display: 'flex' } : { display: 'none' }}
            className=" absolute z-[99999] gap-6 top-0 w-full h-[100vh] bg-black bg-opacity-60 flex-col flex justify-center items-center"
        >
            {image ? (
                <>
                    <div className=" w-[50%] h-[70%]  flex  relative">
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={8 / 10} //main size
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                    <div className="w-[45%]">
                        <Slider
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            onChange={(e: any, zoom: any) => setZoom(zoom)}
                        />
                    </div>
                </>
            ) : (
                ''
            )}

            <div className="flex flex-row gap-5">
                <input
                    type="file"
                    accept="image/*"
                    ref={inpref}
                    style={{ display: 'none' }}
                    onChange={onSelectFile}
                />

                <Mainbtn
                    text="Choose"
                    color="gray"
                    action={() => {
                        triggerFileSelectPopup();
                    }}
                ></Mainbtn>
                <Mainbtn
                    text="Dowland"
                    color="gray"
                    action={async () => {
                        try {
                            const croppedImage = await getCroppedImg(
                                image,
                                croppedArea,
                                0
                            );
                            console.log('donee', { croppedImage });
                            setimg(croppedImage);
                            setclose(false);
                        } catch (e) {
                            console.error(e);
                        }
                    }}
                ></Mainbtn>
                {/* <img src={croppedImage} alt="" /> */}
            </div>
        </div>
    );
}
