import { FC } from 'react'
import styles from './Admin.module.scss'
import Heading from 'components/ui/heading/Heading'
import Statistics from './statistics/Statistics'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'

const Admin:FC = () => {
  return (
    <div className={styles.admin}>
      <AdminNavigation/>
      <Heading title='Statistics'/>
      <Statistics/>
    </div>
  )
}

export default Admin