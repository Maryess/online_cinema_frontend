import { IGalleryItem } from "components/ui/gallery/gallery.interface";
import { ISlide } from "components/ui/slider/slider.interface";

export interface IHome {
    slide?:ISlide[];
    actors?:IGalleryItem[];
    trendingMovies?:IGalleryItem[];
}