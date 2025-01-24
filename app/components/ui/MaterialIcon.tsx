import { FC } from "react"
import { TypeMaterialIcon } from "shared/types/icon.types"
import * as MaterialIcons from "react-icons/md"


const MaterialIcon:FC<{name:TypeMaterialIcon}> = ({name}) => {

    const IconComponent = MaterialIcons[name]

  return <IconComponent/> 
  
}

export default MaterialIcon