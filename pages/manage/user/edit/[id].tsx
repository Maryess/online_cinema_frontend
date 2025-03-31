import UserEdit from 'components/screens/admin/users/UserEdit/UserEdit'
import { NextPage } from 'next'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const UserEditPage:NextPageAuth = () => {
  return (
    <UserEdit/>
  )
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage