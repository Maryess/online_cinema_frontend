import MaterialIcon from 'components/ui/MaterialIcon'
import { useActions } from 'hooks/useAction'
import { FC, MouseEvent } from 'react'
import cn from 'classnames'
import styles from '../Menu.module.scss'
import MenuItem from '../MenuItem'

const LogoutButton:FC = () => {
    const {logout} = useActions()

    const handleLogout = (event:MouseEvent<HTMLAnchorElement>) =>{
        event.preventDefault()
        logout()
    }

  return (

    <MenuItem itemMenu={{
      icon:"MdLogout",
      link:'/auth',
      name:'Logout',
      onClick:handleLogout
    }}/>
  )
}

export default LogoutButton