import { IGenre } from "shared/types/movie.types";

export interface IWatchMovie{
    title:string;
    bigPoster:string;
    genres:IGenre[];
}