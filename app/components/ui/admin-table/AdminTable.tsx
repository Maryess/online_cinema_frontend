import  { FC } from 'react'
import { IAdminTableItem, ITableItem } from './admin-table.interface'
import styles from './AdminTable.module.scss'
import SkeletonLoader from '../SkeletonLoader';
import AdminTableItem from './AdminTableItem';

interface IAdminTable{
    tableItems: IAdminTableItem[],
    headerItems?:string;
    removeHandler: (id:string) => void;
    isLoading:boolean;
}

const AdminTable:FC<IAdminTable> = ({removeHandler,headerItems,tableItems,isLoading}) => {
  return (
    <div className={styles.table}>
       {isLoading? 
       <SkeletonLoader count={4} height={48} className='mt-4'/>: 
       tableItems.length ? tableItems.map((el)=> <AdminTableItem tableItem={el} removeHandler={()=>removeHandler(el.id)} key={el.id}/>) : 'elements not found'
       }
    </div>
  )
}

export default AdminTable