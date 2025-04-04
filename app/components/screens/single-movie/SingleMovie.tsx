import VideoPlayer from 'components/ui/video-player/VideoPlayer'
import { FC } from 'react'
import Meta from 'utils/meta/Meta'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import dynamic from 'next/dynamic'
import Banner from 'components/ui/banner/Banner'
import Info from './Info/Info'
import Description from './Info/Description'


const DynamicPlayer = dynamic(()=> import('components/ui/video-player/VideoPlayer'), {
    ssr:false
})

const SingleMovie:FC<IMoviePage> = ({movie}) => {
  return (
    <Meta title={movie.slug} description=''>
        <Banner imagePath={movie.bigPoster} 
        Info={()=>
        <Info title={movie.name}
         genres={movie.genres || []} actors={movie.actors || []}  
         information={`${movie.year}, ${movie.country}, ${movie.duration}(min)`}/>}/>
        <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug}/>

        <Description description={movie.deskription}/>
    </Meta>
  )
}

export default SingleMovie