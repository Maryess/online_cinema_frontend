import { IActor, IGenre } from "shared/types/movie.types";

export interface IInfo{
  type:string;
  title:string;
  description:string;
  genres?:IGenre[];
  actors?:IActor[];
}

export interface IBanner {
  imagePath:string;
  type:string;
  info :IInfo;
}