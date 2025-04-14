import Profile from 'components/screens/profile/Profile'
import { NextPageAuth } from 'shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
  return (
    <div>
      <Profile/>
    </div>
  )
}

ProfilePage.isOnlyUser = true

export default ProfilePage