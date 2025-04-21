import FreshMovie from 'components/screens/fresh-movie/FreshMovie';
import Profile from 'components/screens/profile/Profile';
import SingleActor from 'components/screens/single-actor/SingleActor';
import { IGalleryItem } from 'components/ui/gallery/gallery.interface';
import { getMovieUrl } from 'config/api.config';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ActorService } from 'services/ActorService';
import { GenreService } from 'services/GenreService';
import { UserService } from 'services/UserService';
import { IActor, IGenre, IMovie} from 'shared/types/movie.types'
import { IUser } from 'shared/types/user.types';

export interface IProfilePage {
  // favoritesMovies:IGalleryItem[];
  user:IUser
}


const ProfilePage:NextPage<IProfilePage> = ({user}) => {

  return (
      <Profile/> 
  )
}


export default ProfilePage