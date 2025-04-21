import { FC } from 'react'
import styles from '../Admin.module.scss'
import { useQuery,  } from 'react-query'
import { UserService } from 'services/UserService'
import { MovieService } from 'services/MovieService'
import { IActor, IGenre, IMovie } from 'shared/types/movie.types'

interface ICountEntity {
    dataCount: number | undefined;
    title:string;
}

const CountEntity:FC<ICountEntity> = ({dataCount, title}) => {

  return (
    <div className={styles.users}>
      <div>{dataCount}</div>
      <p>{title}</p>
    </div>
  )
}

export default CountEntity