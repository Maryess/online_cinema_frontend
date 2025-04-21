export interface IGallery {
    item:IGalleryItem[]
}

interface IGalleryImage {
    width:number;
    height:number;
}

export interface IGalleryItem{
    poster:string;
    name?:string;
    url:string;
}