export interface IMovieState {
    country:string;
    year:number;
    name:string;
    duration:number;
    poster:string;
    bigPoster:string;
    videoUrl:string;
}

export interface IGenreState {

}

export interface IAdminState {
    movie:IMovieState,
    genre?:IGenreState
}

export interface IAdminInitialState {
    admin: IAdminState | null,
    isLoading:boolean
}