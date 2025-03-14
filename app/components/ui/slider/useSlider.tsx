import { useState } from "react"


export const useSlider = (length:number) => {
    const [currentInx,setCurrentInx] = useState<number>(0)
    const [slideIn,setSlideIn] = useState<boolean>(true)

    const isNext = currentInx + 1 < length
    const isPrev = currentInx ? currentInx - 1 < length : false

    const handleArrowClick = (duration: 'next' | 'prev') => {
        const newSlide = duration === 'next' ? currentInx + 1: currentInx - 1 
        setSlideIn(false)

        setTimeout(()=> {
            setCurrentInx(newSlide)
            setSlideIn(true)
        },300)
    }

    return { slideIn, 
        index: currentInx, 
        handleArrowClick, 
        isNext,
        isPrev
    }

}