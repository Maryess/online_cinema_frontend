import Gallery from 'components/ui/gallery/Gallery'
import Link from 'next/link'
import { FC } from 'react'
import { IFreshMoviePage } from '../../../../pages/fresh-movies'
import styles from './FreshModule.module.scss'
import { getMovieUrl } from 'config/api.config'
import Heading from 'components/ui/heading/Heading'
import Meta from 'utils/meta/Meta'

const FreshMovie:FC<IFreshMoviePage> = ({movies}) => {
  return (
    <Meta title='Fresh movies'>
        <Heading title='Fresh movies' className='text-3xl mb-2'/>
        <div className={styles.info}> Watch movies and series online without adds</div>
        <div className={styles.moviesContainer}>
        {  movies.map((el)=>(
            <div className={styles.movie}>
                <Link href={getMovieUrl(`/${el.slug}`)}>
                    <img src={el.bigPoster} alt={el.name} />
                    <div className={styles.title}>
                    {el.name}
                    </div>
            </Link>
            </div>
            )) } 
        </div>
    </Meta>
  )
}

export default FreshMovie