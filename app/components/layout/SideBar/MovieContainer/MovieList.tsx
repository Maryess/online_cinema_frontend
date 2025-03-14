import {FC} from 'react'
import styles from './Movie.module.scss'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'
import { useMovieApi } from 'hooks/useMovieApi'


const MovieList:FC<IMovieList> = ({title,movies}) => {

  return (
     <div className={styles.movies}>
      <span>{title}</span>
      { movies.map((el)=>{
        return <MovieItem key={el.id} movie={el} />
      })}
      </div>
  )
}

export default MovieList
