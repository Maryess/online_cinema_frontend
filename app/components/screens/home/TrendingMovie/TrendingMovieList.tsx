import { FC } from 'react'
import styles from '../Home.module.scss'
import { IMovie } from 'shared/types/movie.types'
import TrendingMovieItem from './TrendingMovieItem'

const TrendingMovieList:FC<{movies:IMovie[]}> = ({movies}) => {
  return (
    <div className={styles.list}>
      {
        movies.map((el)=>{
          return <TrendingMovieItem movie={el} />
        })
      }
    </div>
  )
}

export default TrendingMovieList