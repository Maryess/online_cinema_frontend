import { FC } from "react"
import cn from "classnames"


interface IHeading {
    title:string,
    className?:string
}

const Heading:FC<IHeading> = ({title,className}) => {
  return (
    <h1 className={cn("text-white text-opacity-80 font-semibold",className)}>{title}</h1>
  )
}

export default Heading