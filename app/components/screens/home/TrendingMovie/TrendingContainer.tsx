import { FC } from 'react'
import styles from '../Home.module.scss'
import TrendingMovieList from './TrendingMovieList'
import { useMovieApi } from 'hooks/useMovieApi'
import Heading from 'components/ui/heading/Heading'

const TrendingContainer:FC = () => {

  return (
    <div className={styles.center}> 
      <Heading title='Trending now' className='mb-3 my-8'/>
      <TrendingMovieList movies={  []}/>
    </div>
  )
}

export default TrendingContainer