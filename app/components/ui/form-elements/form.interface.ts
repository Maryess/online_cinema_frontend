import { CSSProperties } from "react";

export interface IUploadFile {
    folder?: string,
    value:string,
    onChange:(event:any[]) => void ,
    isNoImage?:boolean,
    style?:CSSProperties
}