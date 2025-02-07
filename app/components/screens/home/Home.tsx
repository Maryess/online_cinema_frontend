import { FC } from "react"
import Meta from "utils/meta/Meta"
import TrendingContainer from "./TrendingMovie/TrendingContainer"
import BestActorsContainer from "./BestActors/BestActorsContainer"
import WatchMovieContainer from "./WatchMovie/WatchMovieContainer"
import styles from './Home.module.scss'


 const Home:FC = () => {
   return (
      <Meta title="Watch movie online" description="Watch movies and TV shows free in your browser">
         <div className={styles.home}>
         <WatchMovieContainer/>
         <TrendingContainer/>
         <BestActorsContainer/>
         </div>
      </Meta>
   ) 
 }

 export default Home