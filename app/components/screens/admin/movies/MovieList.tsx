import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { useMovie } from './useMovie'
import AdminTable from 'components/ui/admin-table/AdminTable'
import AdminTableHeader from 'components/ui/admin-table/AdminTableHeader'

const MovieList:FC = () => {

    const {data, isLoading, deleteAsync,createAsync, handleSearch, searchTerm} = useMovie()
   
  return (
   <Meta title='Create movie'>
        <AdminNavigation/>
        <Heading title='Movie' className='text-3xl mb-4'/>
        <AdminTableHeader createHandler={createAsync} searchTerm={searchTerm} handleSearch={handleSearch}/>
        <AdminTable tableItems={data || []} isLoading={isLoading} removeHandler={deleteAsync} />
   </Meta>
  )
}

export default MovieList