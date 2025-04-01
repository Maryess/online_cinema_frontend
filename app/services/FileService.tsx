import { axiosDefault } from "api/interceprots";

export const FileService = {
 async upload (file:FormData, folder?:string){
    return axiosDefault.post<{url:string,name:string}[]>('/file', file, {
        params:{folder},
        headers:{'Content-Type': 'multipart/form-data'}
    })
 }  
}