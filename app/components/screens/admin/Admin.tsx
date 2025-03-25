import { FC } from 'react'
import styles from './Admin.module.scss'
import Heading from 'components/ui/heading/Heading'
import Statistics from './statistics/Statistics'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'

const Admin:FC = () => {
  return (
    <div className={styles.admin}>
      <AdminNavigation/>
      <Heading title='Some statistics' className='text-3xl mb-4'/>
      <Statistics/>
    </div>
  )
}

export default Admin