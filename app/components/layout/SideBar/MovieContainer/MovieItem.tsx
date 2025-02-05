import styles from './Movie.module.scss'
import { FC } from "react"
import { IMovie } from 'shared/types/movie.types'
import Link from 'next/link'


const MovieItem:FC<{movie:IMovie}>= ({movie}) => {


  return (
    <div className={styles.content} >
       <Link href={movie.slug}>
            <img src={movie.poster} alt={movie.name} width={65} height={97} draggable={false}/>
       </Link>
       <div className={styles.info} >
            <span>{movie.name}</span>
            <div className={styles.genre}>
                Comedy
            </div>
       </div>
    </div>
  )
}

export default MovieItem