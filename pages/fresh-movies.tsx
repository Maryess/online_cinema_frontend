import FreshMovie from 'components/screens/fresh-movie/FreshMovie'
import { IGalleryItem } from 'components/ui/gallery/gallery.interface'
import { getGenreUrl, getMovieUrl } from 'config/api.config'
import { GetStaticProps } from 'next'
import React, { FC } from 'react'
import { MovieService } from 'services/MovieService'
import { IMovie } from 'shared/types/movie.types'

export interface IFreshMoviePage{
    movies:IGalleryItem[]
    title:string
}

const FreshMoviePage:FC<IFreshMoviePage> = ({movies}) => {
  return (
    <FreshMovie title='Fresh movies' movies={movies}/>
  )
}

export const getStaticProps:GetStaticProps = async () => {
 try{ 
  const {data} = await MovieService.getAll()
  const movies:IGalleryItem[] = data.map((movie)=>({
              poster:movie.bigPoster,
              url:getMovieUrl(`/${movie.slug}`),
              name:movie.name
          }))

  return { props:{movies}} 
}catch{
  return{
    notFound:true
  }
}
}

export default FreshMoviePage