import ActorEdit from 'components/screens/admin/actors/ActorEdit/ActorEdit'
import GenreEdit from 'components/screens/admin/genres/GenreEdit/GenreEdit'
import { NextPageAuth } from 'shared/types/auth.types'

const ActorEditPage:NextPageAuth = () => {
  return (
    <ActorEdit/>
  )
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage