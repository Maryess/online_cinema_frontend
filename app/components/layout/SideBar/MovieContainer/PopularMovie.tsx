import {FC} from 'react'
import { useGetMovie } from './useGetMovie'
import MovieList from './MovieList'

const PopularMovie:FC = () => {

    const {data} = useGetMovie()

  return (
     <MovieList title='Popular movie' movies={data || []} />
  )
}

export default PopularMovie