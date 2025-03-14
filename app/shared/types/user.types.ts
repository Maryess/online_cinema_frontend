import { IFavorite } from "./movie.types";

export interface IUser {
    id:string;
    email:string;
    password:string;
    isAdmin?:boolean;
    favorites?:IFavorite[]
} 