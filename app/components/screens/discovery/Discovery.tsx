import Heading from 'components/ui/heading/Heading'
import Link from 'next/link'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { IDiscoveryPage } from '../../../../pages/discovery'
import styles from '../fresh-movie/FreshModule.module.scss'
import Image from 'next/image'
import { getGenreUrl, getMovieUrl } from 'config/api.config'

const Discovery:FC<IDiscoveryPage> = ({genres}) => {
  return (
    <Meta title='Discovery'>
        <Heading title='Discovery' className='text-3xl mb-2'/>
        <div className={styles.info}> Watch movies and series online without adds</div>
        <div className={styles.moviesContainer}>
        {genres.map((el)=>(
          el.movies.length > 0 && 
            <div key={el.name} className={styles.movie}>
                <Link href={getGenreUrl(`/${el.slug}`)}>
                    <Image src={`${el.movies[0].bigPoster}`} width={200} height={300} alt={el.name} />
                    <div className={styles.title}>
                      <span>{el.name}</span>
                    </div>
            </Link>
            </div>
            ))
        } 
        </div>
    </Meta>
  )
}

export default Discovery