import { FC } from 'react'
import { ITableItem } from './admin-table.interface'
import styles from './AdminTable.module.scss'
import AdminActions from './AdminActions/AdminActions'

const AdminTableItem:FC<ITableItem> = ({tableItem, removeHandler}) => {
  return (
    <div className={styles.item}>
        {tableItem.items.map((value)=> <div key={value}>{value}</div>)}

        <AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler}/>
    </div>
  )
}

export default AdminTableItem