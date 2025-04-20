import { IGenre, IMovie } from "shared/types/movie.types";

export interface ISideBarMovie{
    name:string;
    poster:string;
    genres:IGenre[];
    slug:string;
}

export interface IMovieList{
    title:string;
    movies:ISideBarMovie[];
}
