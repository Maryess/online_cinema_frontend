import { FC, useState } from "react";
import { IMovie } from "shared/types/movie.types";

export const useSlider = (movies:IMovie[]) =>{
    const[stateSlider, setStateSlider] = useState(0)
    
      const handleNextSlide = () => {
        let newSlide = stateSlider === movies.length - 1 ? 0 : stateSlider + 1;
        setStateSlider(newSlide);
        console.log(newSlide)
      };

      const handlePrevSlide = () => {
        let newSlide = stateSlider === movies.length - 1 ? 0 : stateSlider + 1;
        setStateSlider(newSlide);
      };

    
    return {
        handleNextSlide,
        handlePrevSlide,
        stateSlider
    }
}