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
                    <Image src={el.poster} width={50} height={50} alt={el.name} draggable={false} objectFit='cover' objectPosition='top' />
                    <span>{el.name}</span>
            </Link>
        }):
        <div className='text-white text-center'>Movie not found!</div>   
    }
    </div>
  )
}

export default SearchList