import Link from 'next/link'
import { FC, useEffect } from 'react'
import styles from '../Menu.module.scss'
import MaterialIcon from 'components/ui/MaterialIcon'
import { useActions } from 'hooks/useAction'
import { useAuth } from 'hooks/useAuht'
import { toastr } from 'react-redux-toastr'

const AdminPanel:FC = () => {

  const {user} = useAuth()
    
 return (
    <li>
      {
          user ? <Link href={user && user.isAdmin === true?'/admin':'/'}>
          <div className={styles.link_content}>
          <MaterialIcon
              name='Md14Mp'
          />
          <span>Admin panel</span>
          </div>
        </Link> : null
        
      }
      
    </li>
  )
}

export default AdminPanel