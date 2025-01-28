import MovieItem from "./MovieItem"
import { useGetMovie } from "./useGetMovie"
import SkeletonLoader from "components/ui/SkeletonLoader"

const Movie = () => {
    const {isLoading,data} = useGetMovie()

    return ( isLoading? <SkeletonLoader count={3} className="h-9 mt-4"/> :
     <div>

        {data?.map((el)=>{
            return <MovieItem key={el.name} itemMovie={{
                name:el.name,
                poster:el.poster
            }}  />
        })}
     </div>
    )
}

export default Movie