import MovieEdit from 'components/screens/admin/movies/MovieEdit/MovieEdit'
import { NextPageAuth } from 'shared/types/auth.types'

const MovieEditPage:NextPageAuth = () => {
  return (
    <MovieEdit/>
  )
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage