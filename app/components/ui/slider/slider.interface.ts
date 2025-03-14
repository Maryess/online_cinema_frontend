import { IMovie } from "shared/types/movie.types";

export interface ISlide extends Pick<IMovie, 'bigPoster'|'name'|'id'> {
    subTitle:string;
    link:string;
}