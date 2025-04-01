import VideoPlayer from 'components/ui/video-player/VideoPlayer'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import dynamic from 'next/dynamic'

const DynamicPlayer = dynamic(()=> import('components/ui/video-player/VideoPlayer'), {
    ssr:false
})

const SingleMovie:FC<IMoviePage> = ({movie}) => {
  return (
    <Meta title='' description=''>
        <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug}/>
    </Meta>
  )
}

export default SingleMovie