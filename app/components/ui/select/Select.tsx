import { FC } from 'react'
import makeAnimated from 'react-select/animated'
import { IOptions, ISelect } from './select.interface'
import { OnChangeValue } from 'react-select'
import { IField } from 'shared/types/ui.types'
import styles from './Select.module.scss'
import ReactSelect from 'react-select'

const animatedComponent = makeAnimated()

const Select:FC<ISelect> = ({
    field,
    placeholder,
    options,
    isLoading,
    isMulti
}) => {

    const onChange = (newValue : unknown | OnChangeValue<IOptions, boolean>) => {
        field.onChange(isMulti? (newValue as IOptions[]).map((value)=>value.value) :(newValue as IOptions).value)
    }

    const getValue = () => {
        if(field.value){
            return isMulti ? options.filter((option)=> field.value.indexOf(option.value)>=0) : options.find((option)=> option.value === field.value)
        }else{
            return isMulti ? [] : ''
        }
    }

  return (
    <div className={styles.selectContainer}>
        <ReactSelect 
        classNamePrefix='custom-select'
        options={options}
        value={getValue()}
        isMulti={isMulti}
        isLoading={isLoading}
        components={animatedComponent}
        onChange={onChange}
        placeholder={placeholder}
        />
    </div>
  )
}

export default Select