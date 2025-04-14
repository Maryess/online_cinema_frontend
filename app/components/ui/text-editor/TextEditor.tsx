import {FC } from'react'
import { useEditor } from './useEditor'
import styles from './TextEditor.module.scss'
import MaterialIcon from '../MaterialIcon'
import cn from 'classnames'

const TextEditor:FC = () => {

    const {handleTerm,weightText,stylesText,heightText} = useEditor()

  return (
    <div className={styles.editor}>
        <div className={styles.header}>
            <button onClick={weightText}> <MaterialIcon name='MdFormatBold'/></button>
            <button onClick={heightText}> <MaterialIcon name='MdFormatItalic'/></button>
        </div>
        <textarea onChange={handleTerm} className={cn(stylesText,styles.input)}></textarea>
        
    </div>
  )
}

export default TextEditor