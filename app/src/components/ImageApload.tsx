// ImageUpload.js
import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase'; // Adjust the path as needed
import Image from 'next/image';
import AddPhotoIcon from '../../public/svg/addPhotoIcons.svg'
interface Props{
  seturl:(url:string)=>void,
  reset:boolean
}

const ImageUpload = (props:Props) => {
  let{seturl,reset}=props
  const [image, setImage] = useState<any>(null);
  const [url, setUrl] = useState('');

  useEffect(()=>{setImage(null),setUrl(""),seturl("")},[reset])
  const handleImageChange = (e:any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) return;
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
        seturl(downloadURL)
        console.log('File available at', downloadURL);
      });
    });
  };
  useEffect(()=>{handleUpload()},[image])

  return (
    
    <div className=' relative w-[111px] h-[87px] flex items-center'>
      {url? <img src={url} alt='AddPhotoIcon' />:<Image src={AddPhotoIcon} alt='AddPhotoIcon' />}
      {/* <Image src={AddPhotoIcon} alt='AddPhotoIcon' /> */}
      <input type="file" onChange={handleImageChange}  className=' absolute w-full h-full top-0 z-10 opacity-0'/>
      
      {/* {url && <img src={url} alt="Uploaded" />} */}
    </div>
  )
};

export default ImageUpload;
