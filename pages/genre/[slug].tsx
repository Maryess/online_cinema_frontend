import FreshMovie from 'components/screens/fresh-movie/FreshMovie';
import SingleActor from 'components/screens/single-actor/SingleActor';
import { IGalleryItem } from 'components/ui/gallery/gallery.interface';
import { getMovieUrl } from 'config/api.config';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ActorService } from 'services/ActorService';
import { GenreService } from 'services/GenreService';
import { IActor, IGenre, IMovie} from 'shared/types/movie.types'

export interface IGenrePage {
  movies:IGalleryItem[];
  genre:IGenre
}


const GenrePage:NextPage<IGenrePage> = ({movies,genre}) => {

  return (
      genre.movies? <FreshMovie title={`${genre.name} movies`} movies={movies}/> : <div>Not found</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: genres } = await GenreService.getAll()
        const paths = genres.map((genre) => ({
            params: { slug: genre.slug },
        }))

        return { 
          paths, fallback: 'blocking' 
        }
    } catch {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
 try{ 
  const {data:genre} = await GenreService.getBySlug(String(params?.slug)) 
  const movies:IGalleryItem[] = genre.movies.map((movie)=>({
    poster: movie.bigPoster,
    url:getMovieUrl(`/${movie.slug}`),
    name:movie.name
  }))

  return { props:{movies, genre} as IGenrePage} 
}catch{
  return{
    notFound:true
  }
}
}

export default GenrePage