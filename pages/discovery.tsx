import Discovery from 'components/screens/discovery/Discovery'
import { IGalleryItem } from 'components/ui/gallery/gallery.interface'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { GenreService } from 'services/GenreService'
import { MovieService } from 'services/MovieService'
import { IGenre, IMovie } from 'shared/types/movie.types'

export interface IDiscoveryPage {
    genres:IGenre[]
}

const DiscoveryPage:NextPage<IDiscoveryPage> = ({genres}) => {
  return (
    <Discovery genres={genres}/>
  )
}

export const getStaticProps:GetStaticProps = async() => {
    try{
        const {data:genres} = await GenreService.getAll()
        return { props: {
            genres
        }}
    }catch{
      return{
        notFound:true
      }
    }

}

export default DiscoveryPage