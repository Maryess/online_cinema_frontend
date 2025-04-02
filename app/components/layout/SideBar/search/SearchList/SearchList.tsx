import { FC } from 'react'
import styles from './SearchList.module.scss'
import { IMovie } from 'shared/types/movie.types'
import Link from 'next/link'
import { getMovieUrl } from 'config/api.config'
import Image from 'next/image'

const SearchList:FC<{movies:IMovie[]}> = ({movies}) => {
  return (
    <div className={styles.list}>
       {movies.length? 
        movies.map((el)=>{
            return <Link key={el.id} href={getMovieUrl(el.slug)}>
              <div className={styles.a}>
                    <Image src={el.poster} width={100} height={100} alt={el.name} draggable={false} />
                    <span>{el.name}</span>
              </div>
            </Link>
        }):
        <div className='text-white text-center my-4'>Movie not found!</div>   
    }
    </div>
  )
}

export default SearchList