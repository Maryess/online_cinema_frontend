import Search from 'components/layout/SideBar/search/Search'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import AdminTable from 'components/ui/admin-table/AdminTable'
import { useGenre } from './useGenre'
import AdminTableHeader from 'components/ui/admin-table/AdminTableHeader'

const GenreList:FC = () => {

    const {data, isLoading, deleteAsync} = useGenre()
   
  return (
   <Meta title='Create genre'>
        <AdminNavigation/>
        <Heading title='Genres' className='text-3xl mb-4'/>
        <AdminTableHeader/>
        <AdminTable tableItems={data || []} isLoading={isLoading} removeHandler={deleteAsync} />
   </Meta>
  )
}

export default GenreList