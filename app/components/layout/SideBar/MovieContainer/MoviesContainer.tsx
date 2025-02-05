import { FC } from 'react'
import MovieList from './MovieList'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'
import { getMovieUrl } from 'config/api.config'
import styles from './Movie.module.scss'
import { useGetMovie } from './useGetMovie'
import PopularMovie from './PopularMovie'

const MoviesContainer:FC = () => {


  return (
    <div className={styles.container}>
     <PopularMovie />
     <button className={styles.button}>See more</button>   
    </div>
  )
}

export default MoviesContainer