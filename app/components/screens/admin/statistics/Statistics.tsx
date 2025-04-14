import { FC } from 'react'
import CountUser from './CountUser'
import styles from '../Admin.module.scss'
import CountMovie from './CountMovie'

const Statistics:FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUser/>
      <CountMovie/>
    </div>
  )
}

export default Statistics