import { FC } from 'react'
import CountUser from './CountUser'
import styles from '../Admin.module.scss'
import CountMovie from './CountMovie'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'
import { UserService } from 'services/UserService'
import CountEntity from './CountEntity'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import { GenreService } from 'services/GenreService'

const Statistics:FC = () => {

  const {data:movies, isLoading:movieLoading} = useQuery(['movie count'], ()=>
    MovieService.getAll(),{
        select: ({data}) => data.length
  })

  const {data:users, isLoading:userLoading} = useQuery(['user count'], ()=>
    UserService.getAll(),{
        select: ({data}) => data.length
  })

  // const {data:genres, isLoading:genreLoading} = useQuery(['genre count'], ()=> 
  //   GenreService.getAll(),{
  //     select: ({data}) => data.length
  // })


  return (
    <div className={styles.statistics}>
      {movieLoading ? <SkeletonLoader count={1}/> : <CountEntity dataCount={users} title='users'/>}
      {userLoading ? <SkeletonLoader count={1}/> : <CountEntity dataCount={movies} title='movies'/>}
      
    </div>
  )
}

export default Statistics