import { FC, useState } from 'react'
import SearchField from '../search-field/SearchField'
import Button from '../auth/button/Button'
import styles from './AdminTable.module.scss'
import { ITableHeader } from './admin-table.interface'


const AdminTableHeader:FC<ITableHeader> = ({createHandler,searchTerm, handleSearch}) => {

  return (
    <div className={styles.header}>
        <SearchField handleSearch={handleSearch} searchTerm={searchTerm}/>
        <Button onClick={createHandler}>Create new</Button>
    </div>
  )
}

export default AdminTableHeader