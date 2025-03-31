import  { FC } from 'react'
import { IUploadFile } from '../form.interface'
import styles from '../form.module.scss'
import { useUploadFile } from './useUploadFile'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import Image from 'next/image'


const UploadFile:FC<IUploadFile> = ({isNoImage = false, value, folder, onChange,style, placeholder}) => {

    const {uploadFile, isLoading} = useUploadFile(onChange, folder)

  return (
    <div className={styles.uploadField} style={style}>
        <div className={styles.uploadFlex}>
            <label>
                <input type="file" onChange={uploadFile} placeholder={placeholder} className={styles.input}/>
            </label>

            {!isNoImage && <div className={styles.uploadImageContainer}> 
                {
                isLoading? <SkeletonLoader count={1} className='w-full h-full'/>: 
                <Image alt='' src={value} layout='fill' unoptimized/>}
                </div>   
            }
        </div>
    </div>
  )
}

export default UploadFile