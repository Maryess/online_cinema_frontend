export interface IGallery {
    item:IGalleryItem[]
}

export interface IGalleryItem{
    poster:string;
    name?:string;
    url:string;
}