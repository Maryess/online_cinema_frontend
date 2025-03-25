import { FC } from 'react'
import CountUser from './CountUser'
import styles from '../Admin.module.scss'

const Statistics:FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUser/>
    </div>
  )
}

export default Statistics