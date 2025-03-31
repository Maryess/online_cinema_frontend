import { error } from "console";
import { ChangeEvent, useMemo, useState } from "react"
import { useMutation } from "react-query";
import { toastr } from "react-redux-toastr";
import { FileService } from "services/FileService";

type TypeUpload = (onChange:(...event: any[]) => void, folder?:string) => {
    uploadFile : (e:ChangeEvent<HTMLInputElement>) => Promise<void>,
    isLoading:boolean;
}

export const useUploadFile:TypeUpload = (onChange,folder) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {mutateAsync} = useMutation('upload file', (data:FormData)=>
        FileService.upload(data,folder)
    , {
        onSuccess:({data})=>{
            onChange(data[0].url)
        },
        onError:(error) => {
            toastr.error(`${error}`,'Upload file')
        }
    }
)

    const uploadFile = async (e:ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)

        const files = e.target.files

        if(!files?.length) return 

        const formData = new FormData()
        formData.append('file', files[0])

        await mutateAsync(formData)

        setTimeout(()=>{setIsLoading(false)}, 1000)
    }

    return useMemo(()=> ({
        uploadFile, isLoading
    }), [uploadFile, isLoading])
}