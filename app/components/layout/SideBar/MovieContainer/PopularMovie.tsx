import {FC} from 'react'
import { useGetMovie } from './useGetMovie'
import MovieList from './MovieList'
import { useMovieApi } from 'hooks/useMovieApi'

const PopularMovie:FC = () => {

    const {data} = useMovieApi()

  return (
     <MovieList title='Popular movie' movies={data || []} />
  )
}

export default PopularMovie