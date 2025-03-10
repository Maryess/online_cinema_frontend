import { IFavorite } from "./movie.types";

export interface IUser {
    id:string;
    name:string;
    email:string;
    password:string;
    favorites:IFavorite[]
} 