import  { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Meta from 'utils/meta/Meta'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import MovieEditForm from './MovieEditForm'

const MovieEdit:FC = () => {
   
  return (
    <Meta title="Edit movie">
      <AdminNavigation/>
      <Heading title='Edit movie' className='text-3xl mb-4'/>
      <MovieEditForm />
    </Meta>
  )
}

export default MovieEdit