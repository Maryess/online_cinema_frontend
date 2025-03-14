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

const Login:FC = () => {

  const {asPath} = useRouter()
  const {user} = useAuth()
  return (
       <li className={cn({
            [styles.active]: asPath === '/auth'
            })}>
            {!user ? 
              <Link href={'/auth'}>
                <div className={styles.link_content}>
                <MaterialIcon 
                    name='Md14Mp'
                />
                <span>Login</span>
                </div>
            </Link>
            :
            <Link href={'/auth'}>
              <div className={styles.link_content}>
              <MaterialIcon 
                  name='Md14Mp'
              />
              <span>Logout</span>
              </div>
            </Link>
            }
        </li>
  )
}

export default Login