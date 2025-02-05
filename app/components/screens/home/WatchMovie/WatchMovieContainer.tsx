import Heading from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import WatchMovieItem from './WatchMovieItem'
import { IMovie } from 'shared/types/movie.types'
import WatchMovieList from './WatchMovieList'
import { useMovieApi } from 'hooks/useMovieApi'

const WatchMovieContainer:FC<{movies:IMovie[]}>= ({movies}) => {

  const {data} = useMovieApi()

  return (
    <div>
        <Heading title="Watch movie online" className="text-gray-500 mb-4"/>
        <WatchMovieList movies={data || []}/>
    </div>
  )
}

export default WatchMovieContainer