import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import Banner from 'components/ui/banner/Banner'
import { IActorPage } from '../../../../pages/actor/[slug]'
import styles from './SingleActor.module.scss'
import Gallery from 'components/ui/gallery/Gallery'
import Heading from 'components/ui/heading/Heading'

// const DynamicPlayer = dynamic(()=> import('components/ui/video-player/VideoPlayer'), {
//     ssr:false
// })

const SingleActor:FC<IActorPage> = ({actor, slidesMovie}) => {
  console.log({actor})
  return (
    <Meta title={actor.slug} description=''>
      <Banner type='actor' imagePath={actor.photo} info={{
        title:actor.name,
        description:`${actor.country}, ${actor.year}`
      }}
      />
      <Heading title='Movies and series' className='mt-16'/>
      <Gallery item={slidesMovie}/>
    </Meta>
  )
}

export default SingleActor