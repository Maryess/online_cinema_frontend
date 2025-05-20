
import SingleMovie from 'components/screens/single-movie/SingleMovie';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react';
import { MovieService } from 'services/MovieService';
import { IMovie } from 'shared/types/movie.types'

export interface IMoviePage {
  movie:IMovie ;
}


const MoviePage:NextPage<IMoviePage> = ({movie}) => {
  useEffect(()=>{
			
  },[])
  console.log(movie)
  return (
      movie?  <SingleMovie movie={movie} /> : <>Not found</>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((movie) => ({
			params: { slug: movie.slug },
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
 try{ const {data:movie} = await MovieService.getBySlug(String(params?.slug)) 

  return { props:{movie}} 
}catch{
  return{
    notFound:true
  }
}
}

export default MoviePage