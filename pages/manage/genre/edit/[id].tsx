import GenreEdit from 'components/screens/admin/genres/GenreEdit/GenreEdit'
import { NextPageAuth } from 'shared/types/auth.types'

const GenreEditPage:NextPageAuth = () => {
  return (
    <GenreEdit/>
  )
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage