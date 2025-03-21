import { FC } from 'react'
import MenuItem from '../MenuItem'
import { useAuth } from 'hooks/useAuht'
import LogoutButton from './LogoutButton'

const AuthItem:FC = () => {
const {user} = useAuth()
  return (
    <div>
            {!user ? <>
                <MenuItem itemMenu={{
                  icon:"MdSettings",
                  link:'/auth',
                  name:'Login'
                }}/>
            </>
            :
            <LogoutButton/>
            // <MenuItem itemMenu={{
            //   icon:"MdLogin",
            //   link:'/auth',
            //   name:'Login'
            // }}/>
            }
          {user?.isAdmin &&
             <MenuItem itemMenu={{
              icon:"MdOutlineLock",
              link:'/admin-panel',
              name:'Admin panel'
            }}/>
          }
    </div>
  )
}

export default AuthItem