import  { FC } from 'react'
import { IMovie } from 'shared/types/movie.types'
import WatchMovieItem from './WatchMovieItem'

const WatchMovieList:FC<{movies:IMovie[]}> = ({movies}) => {
  return (
    <div>
        {
            movies.map((el)=>{
                return <WatchMovieItem movie={el} key={el.id} />
            })
        }
    </div>
  )
}

export default WatchMovieList