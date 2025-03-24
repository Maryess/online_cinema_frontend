import Search from 'components/layout/SideBar/search/Search'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import styles from '../Admin.module.scss'
import AdminTable from 'components/ui/admin-table/AdminTable'
import { useUser } from './useUser'
import AdminTableHeader from 'components/ui/admin-table/AdminTableHeader'

const UserList:FC = () => {

    const {data, isLoading, deleteAsync} = useUser()
   
  return (
   <Meta title='Create user'>
        <AdminNavigation/>
        <Heading title='Users' className='text-3xl mb-4'/>
        <AdminTableHeader />
        <AdminTable tableItems={data || []} isLoading={isLoading} removeHandler={deleteAsync} />
   </Meta>
  )
}

export default UserList