import VideoPlayer from 'components/ui/video-player/VideoPlayer'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import dynamic from 'next/dynamic'
import Banner from 'components/ui/banner/Banner'
import { IActorPage } from '../../../../pages/actor/[slug]'
import Info from '../single-movie/Info/Info'
import Description from '../single-movie/Info/Description'
import Image from 'next/image'

// const DynamicPlayer = dynamic(()=> import('components/ui/video-player/VideoPlayer'), {
//     ssr:false
// })

const SingleActor:FC<IActorPage> = ({actor}) => {
  console.log({actor})
  return (
    <Meta title={actor.slug} description=''>
       <Image src={`/${actor.photo}`} width={150} height={450} alt=''/>
    </Meta>
  )
}

export default SingleActor