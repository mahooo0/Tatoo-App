// axiosInstance.js
import axios, { AxiosResponse } from 'axios';
import { MasterType, TatoType } from './Types';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: 'https://tatoo-app-back-end-naez.vercel.app/api/', //replace with your base URL
    timeout: 10000, // set a timeout if needed
    headers: {
        'Content-Type': 'application/json',
        // Add other default headers if needed
    },
});

//-------------Post Style--------------
export const PostStyle = async (body: object) => {
    let response = await axiosInstance.post('styles', body);
    return response.status;
};
//-------------Get Style--------------
export const GetStyle = async () => {
    let response = await axiosInstance.get('styles');
    console.log(response);

    return response;
};
//-------------Delete Style--------------
export const DeleteStyle = async (id: string) => {
    let response = await axiosInstance.delete(`styles/${id}`);
    return response;
};
//-------------Edit Style--------------
export const EditStyle = async ({ id, body }: { id: string; body: object }) => {
    let response = await axiosInstance.put(`styles/${id}`, body);
    return response;
};
//-------------Post Master--------------
export const PostMaster = async (body: any) => {
    let response = await axiosInstance.post('masters', body);
    console.log(response);

    return response;
};
//-------------Get Masters--------------
export const GetMasters = async () => {
    let response = await axiosInstance.get('masters');
    return response;
};
//-------------Put Masters--------------
export const PutMasters = async (data: MasterType, id: string) => {
    let response = await axiosInstance.put(`masters/${id}`, data);
    return response;
};
// export const PostMasters = async ({
//     data,
//     id,
// }: {
//     data: MasterType;
//     id: string;
// }): Promise<AxiosResponse<any, any>> => {
//     console.log(id,data)
//     const response = await axiosInstance.put(`Masters/${id}`, data);
//     return response;
// };
//-------------Post Tatoo--------------
export const PostTatoo = async (body: TatoType) => {
    let response = await axiosInstance.post('Tatoos', body);
    return response.status;
};
//-------------Get Tatoo--------------
export const GetTatoo = async () => {
    let response = await axiosInstance.get('Tatoos');
    return response;
};
//-------------Delete Master--------------
export const DeleteMasters = async (id: string) => {
    let response = await axiosInstance.delete(`Masters/${id}`);
    return response;
};
//-------------Delete Tatoo--------------
export const DeleteTatoo = async (id: string) => {
    let response = await axiosInstance.delete(`Tatoos/${id}`);
    return response;
};
