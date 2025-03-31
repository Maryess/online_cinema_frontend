import {FC} from 'react'
import styles from './Movie.module.scss'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'


const MovieList:FC<IMovieList> = ({title,movies}) => {

  return (
     <div className={styles.movies}>
      <span>{title}</span>
      { movies.map((el)=>{
        return <MovieItem key={el.name} movie={el}/>
      }).splice(0,2)}
      </div>
  )
}

export default MovieList
