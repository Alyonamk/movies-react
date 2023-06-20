import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieByName } from 'API/fetchMovies';
import { SearchMovie } from '../../components/Search/Search';
import { MoviesList } from 'components/MovieList/MoviesList';
import { Container } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieByName(query).then(setMovies);
  }, [searchParams]);
  const onChange = event => {
    setQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams(query !== '' ? { query } : {});

    if (query.trim() === '') {
      Notiflix.Notify.info('Write the movie you are looking for');
    }
  };
  return (
    <Container>
      <SearchMovie onSubmit={onSubmit} onChange={onChange} />
      <MoviesList movies={movies} />
    </Container>
  );
};
export default Movies;
