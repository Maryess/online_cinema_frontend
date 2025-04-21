import {FC } from'react'
import { useEditor } from './useEditor'
import styles from './TextEditor.module.scss'
import MaterialIcon from '../MaterialIcon'
import cn from 'classnames'
import { ITextEditor } from './text-editor.interface'

const TextEditor:FC= () => {

    const {handleTerm,stylesText,weightText,heightText,italicText} = useEditor()

  return (
    <div className={styles.editor}>
        <div className={styles.header}>
          <button onClick={weightText}> <MaterialIcon name="MdFormatBold"/></button>
          <button onClick={italicText}> <MaterialIcon name="MdFormatItalic"/></button>
          <button onClick={heightText}> <MaterialIcon name="MdTextFields"/></button>
        </div>
        <textarea onChange={handleTerm} className={cn(stylesText,styles.input)}></textarea>
        
    </div>
  )
}

export default TextEditor