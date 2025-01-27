import MovieItem from "./MovieItem"
import { useGetMovie } from "./useGetMovie"

const Movie = () => {
    const {isLoading,data} = useGetMovie()

    return (
     <div>
        {data?.map((el)=>{
            return   <MovieItem itemMovie={{
                name:el.name,
                poster:el.poster
            }}  />
        })}
     </div>
    )
}

export default Movie