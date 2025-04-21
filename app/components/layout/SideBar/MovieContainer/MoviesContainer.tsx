import { FC } from 'react'
import MovieList from './MovieList'
import styles from './Movie.module.scss'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'
import { UserService } from 'services/UserService'
import { useAuth } from 'hooks/useAuht'
import { GetStaticPaths } from 'next'

const MoviesContainer:FC = () => {

  const {user} = useAuth()


  const {data:popularMovie, isLoading:popularLoading} = useQuery(['favorite list'], () => 
    MovieService.getPopular(),{
     select:({data})=> data.map((movie)=>({
      name:movie.name,
      poster:movie.poster,
      genres: movie.genres.map((genre)=>genre).splice(0,1),
      slug:movie.slug
     }))
    }
  )

  const {data:favoriteMovie,isLoading:favoriteLoading} = useQuery(['favorite movie'], () => 
    UserService.getFavoritesMovies(),{
     select:({data})=> data.map((movie)=>({
      name:movie.name,
      poster:movie.poster,
      genres: movie.genres.map((genre)=>genre).splice(0,1),
      slug:movie.slug
     }))
    }
  )

  return (
    <div className={styles.container}>
      <div>
        <MovieList title='Popular movie' movies={popularMovie || []} />
        <button className={styles.button}>See more</button>
      </div>
      <div>
        <MovieList title='Favorites' movies={favoriteMovie || []}/>
        <button className={styles.button}>See more</button>
     </div>
    </div>
  )
}

// export const getStaticPaths:GetStaticPaths = async () => {
//   try{
//     const {data} = await UserService.getAll()
//     const paths = data.map((user)=>{
//       params:{email:user.email}
//     })

//     return {paths, fallback:'blocking'}
//   }catch{
//     return{
//       paths:[],
//       fallback:false
//     }
//   }
// }

export default MoviesContainer