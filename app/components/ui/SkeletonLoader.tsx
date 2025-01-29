import { FC } from "react"
import Skeleton, { SkeletonProps } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import cn from 'classnames'

const SkeletonLoader:FC<SkeletonProps> = ({className, ...rest}) => {
  return (
   <Skeleton baseColor="#1F2125" highlightColor="#292A2E" className={cn('rounded-lg', className)} {...rest}/>
  )
}

export default SkeletonLoader