import { IMovie } from "shared/types/movie.types";

export interface IMovieEditInput extends Omit<IMovie, 'id' | 'countOpened' >{}