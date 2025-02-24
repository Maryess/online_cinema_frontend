import Link from 'next/link'
import { FC } from 'react'
import { IMovie } from 'shared/types/movie.types'
import styles from '../Home.module.scss'

const TrendingMovieItem:FC<{movie:IMovie}> = ({movie}) => {
  return (
    <div className={styles.trending_movie}>   
        <Link href={`movie/${movie.slug}`}>
            <img className={styles.image} src={movie.poster} width={100} height={150} alt={movie.name}/>
        </Link>
    </div>
  )
}

export default TrendingMovieItem