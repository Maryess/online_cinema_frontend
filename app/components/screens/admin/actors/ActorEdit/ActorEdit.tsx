import  { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Meta from 'utils/meta/Meta'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import Field from 'components/ui/auth/field/Field'
import Button from 'components/ui/auth/button/Button'
import styles from './ActorEdit.module.scss'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import Select from 'react-select'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'
import ActorEditForm from './ActorEditForm'

const ActorEdit:FC = () => {

  return (
    <Meta title="Edit actor">
      <AdminNavigation/>
      <Heading title='Edit actor' className='text-3xl mb-4'/>
      <ActorEditForm/>
    </Meta>
  )
}

export default ActorEdit