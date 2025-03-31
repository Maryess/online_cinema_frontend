import MaterialIcon from 'components/ui/MaterialIcon'
import { useActions } from 'hooks/useAction'
import { FC, MouseEvent } from 'react'
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
      onClick:handleLogout,
      icon:"MdLogout",
      link:'',
      name:'Logout'}}
      />
    // <li className={styles.li}>
		// 	<a onClick={logout} className={styles.li_content}>
		// 		<MaterialIcon name="MdLogout" />
		// 		<span> Logout</span>
		// 	</a>
		// </li>
  )
}

export default LogoutButton