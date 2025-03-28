import Home from "components/screens/home/Home"
import { IHome } from "components/screens/home/home.interface"
import { ISlide } from "components/ui/slider/slider.types"
import { getGenreUrl, getMovieUrl } from "config/api.config"
import { GetStaticProps, NextPage } from "next"
import { MovieService } from "services/MovieService"


const HomePage: NextPage<IHome>= ({slides}) =>{
    return <div>
       <Home slides={slides}/>
    </div>
}

export const getStaticProps:GetStaticProps = async() => {
    try{
        const {data:movies} = await MovieService.getAll() 

        const slides:ISlide [] = movies.slice(0,3).map((movie)=>({
            id:movie.id,
            link:getMovieUrl(`/${movie.slug}`),
            bigPoster:movie.bigPoster,
            name:movie.name
        }))

        return {props :{ 
            slides
        } as IHome}
    }catch (error){
        return {
            props: {
                slides: []
            }
        }
    }
    



}

export default HomePage