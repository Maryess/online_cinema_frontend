import  { FC } from 'react'
import styles from './AdminHandler.module.scss'
import MaterialIcon from 'components/ui/MaterialIcon';
import { useRouter } from 'next/router';

interface IAdminAction{
    editUrl:string;
    removeHandler: () => void;
}

const AdminActions:FC<IAdminAction> = ({editUrl, removeHandler}) => {
    const {push} = useRouter()

  return (
    <div className={styles.actions}>
        <button onClick={()=> push(editUrl)}><MaterialIcon name='MdEdit'/></button>
        <button onClick={removeHandler}><MaterialIcon name='MdRemove'/></button>
    </div>
  )
}

export default AdminActions