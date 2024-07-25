// axiosInstance.js
import axios from 'axios';
import { MasterType, TatoType } from './Types';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/', // replace with your base URL
  timeout: 10000, // set a timeout if needed
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed
  },
});



//-------------Post Style--------------
export const PostStyle= async(body:object)=>{
    let response= await axiosInstance.post("Styles",body)
    return response.status
    
}
//-------------Get Style--------------
export const GetStyle= async()=>{
    let response= await axiosInstance.get("Styles")
    return response
    
}

//-------------Post Master--------------
export const PostMaster= async(body:MasterType)=>{
  let response= await axiosInstance.post("Masters",body)
  return response.status
  
}
//-------------Get Masters--------------
export const GetMasters= async()=>{
  let response= await axiosInstance.get("Masters")
  return response
  
}
//-------------Post Master--------------
export const PostTatoo= async(body:TatoType)=>{
  let response= await axiosInstance.post("Tatoos",body)
  return response.status
  
}
//-------------Get Master--------------
export const GetTatoo= async()=>{
  let response= await axiosInstance.get("Tatoos")
  return response
  
}