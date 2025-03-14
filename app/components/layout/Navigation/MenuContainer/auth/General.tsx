import { FC } from 'react'
import styles from '../Menu.module.scss'
import Heading from 'components/ui/heading/Heading'
import Login from './Login'
import AdminPanel from './AdminPanel'

const General:FC = () => {
  return (
    <div className={styles.menu}>
        <ul className={styles.ul}>
            <Heading className="text-gray-500 mb-6" title='General'/>
            <Login/>
            <AdminPanel />
        </ul>
    </div>
  )
}

export default General