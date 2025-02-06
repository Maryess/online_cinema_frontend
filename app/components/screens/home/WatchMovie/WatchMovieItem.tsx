import Link from 'next/link'
import { FC } from 'react'
import { IMovie } from 'shared/types/movie.types'
import styles from '../Home.module.scss'

const WatchMovieItem:FC<{movie:IMovie}> = ({movie}) => {
  return (
    <div className={styles.wrapper}>
        <Link href={movie.slug} >
            <img src={movie.bigPoster} alt={movie.name} />
            <div>
            <div className={styles.info}>
                <h1>{movie.name}</h1>
                    {movie.genres.map((el)=>{
                        return <span key={el.id}>{el.name}</span>
                    })}
                <button>Watch</button>
            </div>
            </div>
        </Link>
    </div>
  )
}

export default WatchMovieItem