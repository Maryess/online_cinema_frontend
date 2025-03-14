import { FC } from 'react'
import AdminLayout from './layout/AdminLayout'
import AdminContainer from './AdminContainer'

const Admin:FC = () => {
  return (
    <AdminLayout>
        <AdminContainer />
    </AdminLayout>
  )
}

export default Admin