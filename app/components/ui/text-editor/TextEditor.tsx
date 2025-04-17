import {FC } from'react'
import { useEditor } from './useEditor'
import styles from './TextEditor.module.scss'
import MaterialIcon from '../MaterialIcon'
import cn from 'classnames'
import { ITextEditor } from './text-editor.interface'

const TextEditor:FC<ITextEditor> = ({buttons}) => {

    const {handleTerm,stylesText} = useEditor()

  return (
    <div className={styles.editor}>
        <div className={styles.header}>
          {buttons.map((el)=>(
            <button key={el.name} onClick={el.onCLick}> <MaterialIcon name={el.iconName}/></button>
          ))}
        </div>
        <textarea onChange={handleTerm} className={cn(stylesText,styles.input)}></textarea>
        
    </div>
  )
}

export default TextEditor