
import SingleActor from 'components/screens/single-actor/SingleActor';
import SingleMovie from 'components/screens/single-movie/SingleMovie';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ActorService } from 'services/ActorService';
import { MovieService } from 'services/MovieService';
import { IActor} from 'shared/types/movie.types'

export interface IActorPage {
  actor:IActor ;
}


const ActorPage:NextPage<IActorPage> = ({actor}) => {
  console.log(actor)
  return (
      actor? <SingleActor actor={actor}/>: <>Not found</>
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
 try{ const {data:actor} = await ActorService.getBySlug(String(params?.slug)) 

  return { props:{actor}} 
}catch{
  return{
    notFound:true
  }
}
}

export default ActorPage