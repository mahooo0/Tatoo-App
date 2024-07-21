// axiosInstance.js
import axios from 'axios';

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