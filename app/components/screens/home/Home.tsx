import { FC } from "react"
import Meta from "utils/meta/Meta"
import Heading from "components/ui/heading/Heading"
import Slider from "components/ui/slider/Slider"
import Gallery from "components/ui/gallery/Gallery"
import styles from './Home.module.scss'
import { IHome } from "../../../../pages"

 const Home:FC<IHome> = ({slides, slidesActors, slidesTrendingMovies}) => {

   return (
      <Meta title="Watch movie online" description="Watch movies and TV shows free in your browser">
         <Heading title="Watch movie online"/>
         {slides.length && <Slider countOpened={0}slides={slides} />}
         <div className={styles.movies}>
            <Heading title="Trending movie"/>
            <Gallery item={slidesTrendingMovies}/>
         </div>
         <div className={styles.actors}>
            <Heading title="Best actors"/>
            <Gallery item={slidesActors}/>
         </div>
      </Meta>
   ) 
 }

export default Home
 

