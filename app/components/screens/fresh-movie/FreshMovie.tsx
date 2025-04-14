import Gallery from 'components/ui/gallery/Gallery'
import Link from 'next/link'
import { FC } from 'react'
import { IFreshMoviePage } from '../../../../pages/fresh-movies'
import styles from './FreshModule.module.scss'
import { getMovieUrl } from 'config/api.config'
import Heading from 'components/ui/heading/Heading'
import Meta from 'utils/meta/Meta'
import Image from 'next/image'

const FreshMovie:FC<IFreshMoviePage> = ({movies, title}) => {
  return (
    <Meta title='Fresh movies'>
        <Heading title={title} className='text-3xl mb-2'/>
        <div className={styles.info}> Watch movies and series online without adds</div>
        <div className={styles.moviesContainer}>
        {movies.map((el)=>(
            <div key={el.name} className={styles.movie}>
                <Link href={el.url}>
                    <Image src={el.poster} width={200} height={300} alt={el.name || ''} />
                    <div className={styles.title}>
                    {el.name}
                    </div>
            </Link>
            </div>
            ))
        } 
        </div>
    </Meta>
  )
}

export default FreshMovie