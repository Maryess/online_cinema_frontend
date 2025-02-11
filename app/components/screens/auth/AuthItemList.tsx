import  { FC } from 'react'
import AuthItem from './AuthItem'
import styles from './auth.module.scss'

const AuthItemList:FC = () => {
  return (
    <ul className={styles.ul}>
        <AuthItem/>
    </ul>
  )
}

export default AuthItemList