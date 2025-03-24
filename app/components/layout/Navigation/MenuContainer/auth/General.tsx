import { FC } from 'react'
import Menu from '../Menu'
import Heading from 'components/ui/heading/Heading'
import styles from '../Menu.module.scss'
import { useRouter } from 'next/router'
import { IMenuItem } from '../menu.interface'
import Link from 'next/link'
import MaterialIcon from 'components/ui/MaterialIcon'
import cn from 'classnames'
import { useActions } from 'hooks/useAction'
import { useAuthRedirect } from 'components/screens/auth/useAuthRedirect'
import { useAuth } from 'hooks/useAuht'
import MenuItem from '../MenuItem'
import AuthItem from './AuthItem'

const Login:FC = () => {

  return (
    <div className={styles.menu}>
    <ul className={styles.ul}>
      <AuthItem/>
    </ul>
    </div>
  )
}

export default Login