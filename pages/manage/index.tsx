import Admin from 'components/screens/admin/Admin'
import { NextPageAuth } from 'shared/types/auth.types'

const AdminPanel: NextPageAuth = () => {
  return (
    <Admin/>
  )
}

AdminPanel.isOnlyAdmin = true

export default AdminPanel