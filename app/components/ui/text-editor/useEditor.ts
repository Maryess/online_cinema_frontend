import { ChangeEvent, useCallback, useMemo, useState } from "react"

export const useEditor = () => {
    const [term,setTerm] = useState<string>('')
    const [stylesText,setStylesText] = useState<string>('')


    const handleTerm = useCallback((e:ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        setTerm(value)
        console.log(value)
    },[])

    const weightText = useCallback(() => {
        const styleText = 'font-bold'
        setStylesText(styleText)
        console.log(stylesText)
    },[stylesText])

    const heightText = useCallback(() => {
        const styleText = 'italic'
        setStylesText(styleText)
        console.log(stylesText)
    },[stylesText])

    const handleKeyDown = useCallback((e:KeyboardEvent) => {
        switch(e.key){
            case 'b': {
                weightText()
            }
            case 'i': {
                heightText()
            }
        }
    },[weightText,heightText])

    return useMemo(()=>({
        weightText,
        term,
        handleTerm,
        stylesText,
        heightText,
        handleKeyDown
    }),[weightText,handleTerm,heightText,stylesText,term,handleKeyDown])
}