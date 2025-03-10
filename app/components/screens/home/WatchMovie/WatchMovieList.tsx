import  { FC, useState } from 'react'
import { IMovie } from 'shared/types/movie.types'
import WatchMovieItem from './WatchMovieItem'
import Swipe from 'react-easy-swipe'
import { useSlider } from './useSlider'

const WatchMovieList:FC<{movies:IMovie[]}> = ({movies}) => {


  const {handleNextSlide, stateSlider} = useSlider(movies)

  return (
    <div>
      <Swipe
      onSwipeLeft={handleNextSlide}
      >
        {
            movies.map((el,index)=>{
              if (index === stateSlider){
                return <WatchMovieItem movies={movies} movie={el} key={el.id} />}
            })
        }
        </Swipe>
        
    </div>
  )
}

export default WatchMovieList