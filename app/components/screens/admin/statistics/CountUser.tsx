import { FC } from 'react'
import styles from '../Admin.module.scss'
import { useQuery } from 'react-query'
import { UserService } from 'services/UserService'

const CountUser:FC = () => {

 const {data, isLoading} = useQuery(['user count'], ()=>
                  UserService.getAll(),{
                      select: ({data}) => data.length
     })

  return (
    <div className={styles.users}>
      <div>{data}</div>
      <p>users</p>
    </div>
  )
}

export default CountUser