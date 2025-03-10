import Link from 'next/link'
import { FC } from 'react'
import { IMovie } from 'shared/types/movie.types'
import styles from '../Home.module.scss'
import GetContent from 'components/ui/get-content/GetContent'


const TrendingMovieItem:FC<{movie:IMovie}> = ({movie}) => {
  return (
    <div className={styles.trending_movie}>   
        <Link href={`movie/${movie.slug}`}>
            <GetContent link={movie.poster} height={150} width={100} name={movie.name}/>
        </Link>
    </div>
  )
}

export default TrendingMovieItem