import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'API/fetchMovies';
import { MoviesList } from 'components/MovieList/MoviesList';
import { Main } from './Home.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <Main>
      <MoviesList movies={movies} />
    </Main>
  );
};
export default Home;
