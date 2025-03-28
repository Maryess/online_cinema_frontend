import { FC } from "react"
import Meta from "utils/meta/Meta"
import styles from './Home.module.scss'
import { IHome } from "./home.interface"
import Heading from "components/ui/heading/Heading"
import Slider from "components/ui/slider/Slider"
import { MovieService } from "services/MovieService"
import { useQuery } from "react-query"


 const Home:FC<IHome> = ({slides}) => {


   return (
      <Meta title="Watch movie online" description="Watch movies and TV shows free in your browser">
         <Heading title="Watch movie online"/>
         {slides.length && <Slider slides={slides} />}
      </Meta>
   ) 
 }

 export default Home