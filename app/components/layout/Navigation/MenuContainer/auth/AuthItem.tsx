import { FC } from 'react'
import MenuItem from '../MenuItem'
import { useAuth } from 'hooks/useAuht'
import LogoutButton from './LogoutButton'
import { getAdminUrl, getUserUrl } from 'config/api.config'

const AuthItem:FC = () => {
const {user} = useAuth()
  return (
    <>
    {user ? (
      <>
        <MenuItem
          itemMenu={{
            icon: 'MdSettings',
            link: '/profile',
            name: 'Profile',
          }}
        />
        <LogoutButton />
      </>
    ) : (
      <MenuItem itemMenu={{ icon: 'MdLogin', link: '/auth', name: 'Login' }} />
    )}

    {user?.isAdmin && (
      <MenuItem
      itemMenu={{
          icon: 'MdOutlineLock',
          link: getAdminUrl('/'),
          name: 'Admin panel',
        }}
      />
    )}
  </>
  )
}

export default AuthItem