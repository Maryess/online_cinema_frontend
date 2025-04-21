import SingleActor from 'components/screens/single-actor/SingleActor';
import { IGalleryItem } from 'components/ui/gallery/gallery.interface';
import { getMovieUrl } from 'config/api.config';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ActorService } from 'services/ActorService';
import { IActor} from 'shared/types/movie.types'

export interface IActorPage {
  actor:IActor;
  slidesMovie:IGalleryItem[];
}


const ActorPage:NextPage<IActorPage> = ({actor,slidesMovie}) => {
  console.log(actor)
  return (
      actor? <SingleActor actor={actor} slidesMovie={slidesMovie}/>: <>Not found</>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: actors } = await ActorService.getAll()
        const paths = actors.map((actor) => ({
            params: { slug: actor.slug },
        }))

        return { paths, fallback: 'blocking' }
    } catch {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
 try{ 
  const {data:actor} = await ActorService.getBySlug(String(params?.slug)) 

  const slidesMovie:IGalleryItem[] = actor.movies.map((movie)=>({
    poster:movie.poster,
    name:movie.name,
    url:getMovieUrl(`/${movie.slug}`)
  }))
  return { props:{actor,slidesMovie} as IActorPage} 
}catch{
  return{
    notFound:true
  }
}
}

export default ActorPage