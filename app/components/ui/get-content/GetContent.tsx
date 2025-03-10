import { useMovieApi } from "hooks/useMovieApi";
import { FC } from "react";


interface IGetMovie {
    height?:number;
    width?:number;
    link:string;
    name:string;
}

 const GetContent:FC<IGetMovie> =({height,width,link,name}) => {
    return  <img className="mr-4 rounded-image" src={link} alt={name} width={width} height={height} />
}

export default GetContent