import {FC} from 'react'
import styles from './Movie.module.scss'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'


const MovieList:FC<IMovieList> = ({title,movies}) => {

  return (
     <div className={styles.movies}>
      { movies.map((el)=>{
        return <MovieItem key={el.id} movie={el} />
      })}
      </div>
  )
}

export default MovieList
