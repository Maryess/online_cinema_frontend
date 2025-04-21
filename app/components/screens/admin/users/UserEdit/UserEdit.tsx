import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { useUserEdit } from './useUserEdit'
import { useForm } from 'react-hook-form'
import { IUserEditInput } from './user-edit.interface'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import styles from './UseEdit.module.scss'
import Field from 'components/ui/auth/field/Field'
import Button from 'components/ui/auth/button/Button'
import UserEditForm from './UserEditForm'

const UserEdit:FC = () => {

  return (
    <Meta title="Edit user">
      <AdminNavigation/>
      <Heading title='Edit user' className='text-3xl mb-4'/>
      <UserEditForm/>
    </Meta>
  )
}

export default UserEdit