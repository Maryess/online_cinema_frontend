import Search from 'components/layout/SideBar/search/Search'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import AdminTable from 'components/ui/admin-table/AdminTable'
import { useActor } from './useActor'
import AdminTableHeader from 'components/ui/admin-table/AdminTableHeader'

const ActorList:FC = () => {

    const {data, isLoading, deleteAsync,createAsync, handleSearch, searchTerm} = useActor()
   
  return (
   <Meta title='Create actor'>
        <AdminNavigation/>
        <Heading title='Actors' className='text-3xl mb-4'/>
        <AdminTableHeader createHandler={createAsync} searchTerm={searchTerm} handleSearch={handleSearch}/>
        <AdminTable tableItems={data || []} isLoading={isLoading} removeHandler={deleteAsync} />
   </Meta>
  )
}

export default ActorList