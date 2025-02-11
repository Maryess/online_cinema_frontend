import { FC } from 'react'
import Menu from '../Menu'
import Heading from 'components/ui/heading/Heading'
import styles from '../Menu.module.scss'
import { useRouter } from 'next/router'
import { IMenuItem } from '../menu.interface'
import Link from 'next/link'
import MaterialIcon from 'components/ui/MaterialIcon'
import cn from 'classnames'

const Login:FC<{itemMenu:IMenuItem}> = ({itemMenu}) => {

  const {asPath} = useRouter()

  return (
    <div className={styles.menu}>
      <ul className={styles.ul}>
       <Heading className="text-gray-500 mb-6" title='General'/>
       <li className={cn({
            [styles.active]: asPath === itemMenu.link
            })}>
            <Link href={itemMenu.link}>
                <div className={styles.link_content}>
                <MaterialIcon 
                    name={itemMenu.icon}
                />
                <span>{itemMenu.name}</span>
                </div>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Login