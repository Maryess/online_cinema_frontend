import VideoPlayer from 'components/ui/video-player/VideoPlayer'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import dynamic from 'next/dynamic'
import Banner from 'components/ui/banner/Banner'
import Description from 'components/ui/banner/Info/Description'

const DynamicPlayer = dynamic(()=> import('components/ui/video-player/VideoPlayer'), {
    ssr:false
})

const SingleMovie:FC<IMoviePage> = ({movie}) => {
  return (
    <Meta title={movie.slug} description=''>
        <Banner type='movie' imagePath={movie.bigPoster} info={{
          title:movie.name,
          description:`${movie.year}, ${ movie.country}, ${movie.duration} min`,
          genres:movie.genres,
          actors:movie.actors
        }}/>
        <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug}/>

        <Description description={movie.deskription}/>
    </Meta>
  )
}

export default SingleMovie