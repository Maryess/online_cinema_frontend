import { NextPageAuth } from 'shared/types/auth.types'

const GenreListPage:NextPageAuth = () => {
  return (
    <div>Genres</div>
  )
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage