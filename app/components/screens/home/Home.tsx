import { FC } from "react"
import Meta from "utils/meta/Meta"
import { IHome } from "./home.interface"
import Heading from "components/ui/heading/Heading"
import Slider from "components/ui/slider/Slider"
import Gallery from "components/ui/gallery/Gallery"
import { Controller, useForm } from "react-hook-form"
import UploadFile from "components/ui/form-elements/UploadFile/UploadFile"

 const Home:FC<IHome> = ({slides, slidesActors, slidesTrendingMovies}) => {


   const {control} = useForm()

   return (
      <Meta title="Watch movie online" description="Watch movies and TV shows free in your browser">
         <Heading title="Watch movie online"/>
         {slides.length && <Slider slides={slides} />}
         <Gallery item={slidesActors}/>
         <Gallery item={slidesTrendingMovies}/>
         <Controller
                                name="poster"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { value, onChange },
                                    fieldState: { error },
                                }) => (
                                    <UploadFile
                                        placeholder={value}
                                        folder='movies'
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                                rules={{
                                    required: 'Poster is required!',
                                }}
                            />
      </Meta>
   ) 
 }

 export default Home