import { useLocation } from 'react-router-dom';
import { Movies, Item, Description, Image, Title } from './MovieList.styled';
import defaultImg from '../../img/no-img.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const checkPoster = img => {
    if (!img) {
      return defaultImg;
    }
    return `https://image.tmdb.org/t/p/w500${img}`;
  };
  return (
    <Movies>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Description to={`/movies/${movie.id}`} state={{ from: location }}>
            <Image src={checkPoster(movie.poster_path)} alt="" />
            <Title>{movie.title ?? movie.original_name}</Title>
          </Description>
        </Item>
      ))}
    </Movies>
  );
};
