import { FC } from 'react'
import SearchField from '../search-field/SearchField'
import Button from '../auth/button/Button'
import styles from './AdminTable.module.scss'

const AdminTableHeader:FC = () => {
  return (
    <div className={styles.header}>
        <SearchField searchTerm=''/>
        <Button>Create new</Button>
    </div>
  )
}

export default AdminTableHeader