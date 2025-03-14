import { FC } from 'react'
import styles from './Admin.module.scss'
import EditMovie from './movie/EditMovie'

const AdminContainer:FC = () => {
  return (
    <div className={styles.admin}>
        <EditMovie />
    </div>
  )
}

export default AdminContainer