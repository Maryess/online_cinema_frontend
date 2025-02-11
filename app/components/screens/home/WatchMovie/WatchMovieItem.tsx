import Link from 'next/link'
import { FC, useState } from 'react'
import { IMovie } from 'shared/types/movie.types'
import styles from '../Home.module.scss'
import { useSlider } from './useSlider'
import { AiOutlineRight } from 'react-icons/ai'


const WatchMovieItem:FC<{movie:IMovie, movies:IMovie[]}> = ({movie, movies}) => {


    const {handleNextSlide} = useSlider(movies)

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
        <AiOutlineRight onClick={handleNextSlide} className='w-7 h-7 rounded-3xl bg-primary absolute right-3 bottom-4 cursor-pointer'/>
    </div>
  )
}

export default WatchMovieItem