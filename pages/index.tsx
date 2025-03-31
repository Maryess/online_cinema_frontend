import Home from "components/screens/home/Home"
import { IHome } from "components/screens/home/home.interface"
import { IGalleryItem } from "components/ui/gallery/gallery.interface"
import { ISlide } from "components/ui/slider/slider.types"
import { getActorUrl, getGenreUrl, getMovieUrl } from "config/api.config"
import { GetStaticProps, NextPage } from "next"
import { ActorService } from "services/ActorService"
import { MovieService } from "services/MovieService"


const HomePage: NextPage<IHome>= ({slides,slidesActors, slidesTrendingMovies}) =>{
    return <div>
       <Home slides={slides} slidesActors={slidesActors} slidesTrendingMovies={slidesTrendingMovies}/>
    </div>
}

export const getStaticProps:GetStaticProps = async() => {
    try{
        const {data:movies} = await MovieService.getAll() 
        const {data:actors} = await ActorService.getAll()
        const {data:trendingMovies} = await MovieService.getAll()

        const slides:ISlide[] = movies.slice(0,3).map((movie)=>({
            id:movie.id,
            link:getMovieUrl(`/${movie.slug}`),
            bigPoster:movie.bigPoster,
            name:movie.name
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