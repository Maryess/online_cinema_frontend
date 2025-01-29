import { FC } from "react"
import { TypeMaterialIcon } from "shared/types/icon.types"
import * as MaterialIcons from "react-icons/md"


const MaterialIcon:FC<{name:TypeMaterialIcon, classname:string}> = ({name, classname}) => {

    const IconComponent = MaterialIcons[name]

  return <IconComponent className={classname}/> 
  
}

export default MaterialIcon