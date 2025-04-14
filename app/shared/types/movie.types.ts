export interface IMovie {
    id:string;
    poster:string;
    bigPoster:string;
    name:string;
    slug:string;
    deskription:string;
    year:number;
    duration:number;
    country:string;
    videoUrl:string;
    countOpened:0;
    actors:IActor[];
    genres:IGenre[];
    rating:IRating
}

export interface IGenre {
    id:string;
    name:string;
    slug:string;
    movies:IMovie[]
}

export interface IActor {
    id:string;
    name:string;
    slug:string;
    year:number;
    country:string;
    photo:string;
    movies:IMovie[];
}

export interface IRating {

}

export interface IFavorite{

}