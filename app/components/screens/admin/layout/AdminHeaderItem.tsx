import { FC, useState } from 'react'
import { IAdminItem } from '../admin.interface'
import styles from '../Admin.module.scss'

const AdminHeaderItem:FC<{item:IAdminItem}> = ({item}) => {

    const [state,setState] = useState<string | undefined>('statistics') 

    const changeState = () => {
        setState(item.state)
        console.log(state)
    }

  return (
    <li className={styles.li}>
        <button onClick={changeState}>{item.title}</button>
    </li>
  )
}

export default AdminHeaderItem