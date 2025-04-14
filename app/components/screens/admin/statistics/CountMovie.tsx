import { FC } from 'react'
import styles from '../Admin.module.scss'
import { useQuery } from 'react-query'
import { UserService } from 'services/UserService'
import { MovieService } from 'services/MovieService'

const CountMovie:FC = () => {

 const {data, isLoading} = useQuery(['movie count'], ()=>
                  MovieService.getAll(),{
                      select: ({data}) => data.length
     })

  return (
    <div className={styles.users}>
      <div>{data}</div>
      <p>movies</p>
    </div>
  )
}

export default CountMovie