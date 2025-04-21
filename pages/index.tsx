import Home from "components/screens/home/Home"
import { IGalleryItem } from "components/ui/gallery/gallery.interface"
import { ISlide } from "components/ui/slider/slider.types"
import { getActorUrl, getGenreUrl, getMovieUrl } from "config/api.config"
import { GetStaticProps, NextPage } from "next"
import { ActorService } from "services/ActorService"
import { MovieService } from "services/MovieService"

export interface IHome {
    slides:ISlide[];
    slidesActors:IGalleryItem[];
    slidesTrendingMovies:IGalleryItem[];
}

const HomePage: NextPage<IHome>= ({slides,slidesActors, slidesTrendingMovies}) =>{
    console.log(slides,slidesActors, slidesTrendingMovies)
    return <div>
       <Home slides={slides} slidesActors={slidesActors} slidesTrendingMovies={slidesTrendingMovies}/>
    </div>
}

export const getStaticProps:GetStaticProps = async() => {
    try{
        const {data:movies} = await MovieService.getPopular() 
        const {data:actors} = await ActorService.getAll()
        const {data:trendingMovies} = await MovieService.getPopular()

        const slides:ISlide[] = movies.slice(0,4).map((movie, index)=>({
            id:movie.id,
            link:getMovieUrl(`/${movie.slug}`),
            bigPoster:movie.bigPoster,
            name:movie.name,
            countOpened:movie.countOpened
        }))

        const slidesActors:IGalleryItem[] = actors.map((actor)=>({
            poster:actor.photo,
            url:getActorUrl(`/${actor.slug}`),
            name:actor.name        
        }))

        const slidesTrendingMovies:IGalleryItem[] = trendingMovies.map((movie)=>({
            poster:movie.poster,
            url:getMovieUrl(`/${movie.slug}`),
            name:movie.name
        }))

        return {props :{ 
            slides,
            slidesActors,
            slidesTrendingMovies
        } as IHome}
    }catch (error){
        return {
            props: {
                slides: [],
                slidesActors:[],
                slidesTrendingMovies:[]
            }
        }
    }
    



}

export default HomePage