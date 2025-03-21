import { FC } from "react"
import Meta from "utils/meta/Meta"
import TrendingContainer from "./TrendingMovie/TrendingContainer"
import BestActorsContainer from "./BestActors/BestActorsContainer"
import WatchMovieContainer from "./WatchMovie/WatchMovieContainer"
import styles from './Home.module.scss'
import { IHome } from "./home.interface"
import Heading from "components/ui/heading/Heading"
import Slider from "components/ui/slider/Slider"
import { useMovieApi } from "hooks/useMovieApi"

 const Home:FC<IHome> = ({slide}) => {

   return (
      <Meta title="Watch movie online" description="Watch movies and TV shows free in your browser">
         <Heading title="Watch movie online"/>
         {/* <Slider slides ={slide || []} /> */}
      </Meta>
   ) 
 }

 export default Home