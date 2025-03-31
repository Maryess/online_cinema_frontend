import { IGalleryItem } from "components/ui/gallery/gallery.interface";
import { ISlide } from "components/ui/slider/slider.types";


export interface IHome {
    slides:ISlide[];
    slidesActors:IGalleryItem[];
    slidesTrendingMovies:IGalleryItem[];
}