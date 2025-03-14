import { FC } from 'react'
import styles from '../Admin.module.scss'
import { adminData } from './admin.data'
import AdminHeaderItem from './AdminHeaderItem'

const AdminLayout:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={styles.layout}>
        <div className={styles.header}>
          <ul className={styles.ul}>
           {
            adminData.map((el)=>{
              return <AdminHeaderItem key={el.title} item={{title:el.title, state:el.state}}/>
            })
           }
          </ul>
        </div>
        {children}
    </div>
  )
}

export default AdminLayout