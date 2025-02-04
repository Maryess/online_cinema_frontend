import Heading from "components/ui/heading/Heading"
import { FC } from "react"
import { toastr } from "react-redux-toastr"
import Meta from "utils/meta/Meta"

 const Home:FC = () => {
   return (
      <Meta title="Watch movie online" description="Watch movies and TV shows free in your browser">
         <Heading title="Watch movie online" className="text-gray-300"/>
      </Meta>
   ) 
 }

 export default Home