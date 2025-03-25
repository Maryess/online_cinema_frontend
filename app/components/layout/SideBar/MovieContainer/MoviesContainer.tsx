import { FC } from 'react'
import MovieList from './MovieList'
import styles from './Movie.module.scss'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'

const MoviesContainer:FC = () => {

  const {data, isLoading} = useQuery(['favorite list'], () => 
    MovieService.getAll(),{
     select:({data})=> data.map((movie)=>({
      name:movie.name,
      poster:movie.poster,
      genres: movie.genres.map((genre)=>genre),
      slug:movie.slug
     }))
    }
  )

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