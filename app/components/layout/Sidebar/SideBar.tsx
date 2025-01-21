import Link from "next/link"
import styles from "./SideBar.module.scss"
import { FC } from "react"
import Field from "components/ui/field/Field"

const SideBar:FC = () => {
    return <div>
        <Field 
        type="text"
        placeholder="Search"
        
        />
    </div>
}

export default SideBar