import { FC } from 'react'
import MenuItem from '../MenuItem'
import { useAuth } from 'hooks/useAuht'
import LogoutButton from './LogoutButton'
import styles from '../Menu.module.scss'

const AuthItem:FC = () => {
const {user} = useAuth()
  return (
    <>
        {!user &&
                <MenuItem itemMenu={{
                  icon:'MdLogin',
                  link:'/auth',
                  name:'Login'
                }}/>
        }
        {user && <>
            <MenuItem itemMenu={{
              icon:'MdSettings',
              link:'/profile',
              name:'Profile'
            }}/>
            <LogoutButton/>
            </>}
           
          
          {user?.isAdmin &&
             <MenuItem itemMenu={{
              icon:"MdOutlineLock",
              link:'/manage',
              name:'Admin panel'
            }}/>
          }
    </>
  )
}

export default AuthItem