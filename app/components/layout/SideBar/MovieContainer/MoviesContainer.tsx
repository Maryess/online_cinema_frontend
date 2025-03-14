import { FC } from 'react'
import MovieList from './MovieList'
import styles from './Movie.module.scss'

const MoviesContainer:FC = () => {

  return (
    <div className={styles.container}>
      <div>
        <MovieList title='Popular movie' movies={data || []} />
        <button className={styles.button}>See more</button>
      </div>
      <div>
        <MovieList title='Favorites' movies={data || []}/>
        <button className={styles.button}>See more</button>
     </div>
    </div>
  )
}

export default MoviesContainer