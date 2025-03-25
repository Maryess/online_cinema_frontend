import styles from './Movie.module.scss'
import { FC } from "react"
import { IMovie } from 'shared/types/movie.types'
import Link from 'next/link'
import { ISideBarMovie } from './movie-list.interface'


const MovieItem:FC<{movie:ISideBarMovie}>= ({movie}) => {


  return (
    <div className={styles.content} >
       <Link href={movie.slug}>
            <img src={movie.poster} alt={movie.name} width={65} height={97} draggable={false}/>
       </Link>
       <div className={styles.info} >
            <span>{movie.name}</span>
            <div className={styles.genre}>
                {movie.genres.map((el)=>(
                  el.name
                ))}
            </div>
       </div>
    </div>
  )
}

export default MovieItem