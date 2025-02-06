import  { FC } from 'react'
import styles from '../Home.module.scss'
import BestActorList from './BestActorList'
import { useActorApi } from 'hooks/useActorApi'
import Heading from 'components/ui/heading/Heading'

const BestActorsContainer:FC = () => {

    const {data} = useActorApi()

  return (
    <div className={styles.footer}>
        <Heading title='Best actors' className='mt-8 mb-3'/>
        <BestActorList actors={data || []}/>
    </div>
  )
}

export default BestActorsContainer