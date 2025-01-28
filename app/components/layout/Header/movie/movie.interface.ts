import { IMenuItem } from "components/layout/Navigation/MenuContainer/menu.interface";
import { IGenre, IMovie } from "shared/types/movie.types";

export interface IMovieItem {
    name:string;
    poster:string;
    genres: IGenre[]
}
