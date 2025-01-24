import { FC } from "react"
import Field from "components/ui/field/Field"
import styles from './Header.module.scss'

const Header:FC = () => {
    return <div>
        <Field 
        type="text"
        placeholder="Search"
        
        />
    </div>
}

export default Header