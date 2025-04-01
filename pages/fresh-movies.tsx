import FreshMovie from 'components/screens/fresh-movie/FreshMovie'
import { GetStaticProps } from 'next'
import React, { FC } from 'react'
import { MovieService } from 'services/MovieService'
import { IMovie } from 'shared/types/movie.types'

export interface IFreshMoviePage{
    movies:IMovie[]
}

const FreshMoviePage:FC<IFreshMoviePage> = ({movies}) => {
  return (
    <FreshMovie movies={movies}/>
  )
}

export const getStaticProps:GetStaticProps = async () => {
 try{ const {data:movies} = await MovieService.getAll()

  return { props:{movies}} 
}catch{
  return{
    notFound:true
  }
}
}

export default FreshMoviePage