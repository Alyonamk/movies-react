import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieDetails } from 'API/fetchMovies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GoBack, NavButtons, Button, LinkBtn } from './MovieDetails.styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Report } from 'notiflix/build/notiflix-report-aio';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovieDetails)
      .catch(error => {
        Report.info(
          '404 error',
          'Server is not responding, try another movie',
          'Okay'
        );
      });
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <GoBack to={backLink}>
        <FaLongArrowAltLeft />
        Go back
      </GoBack>
      <MovieCard movie={movieDetails} />
      <NavButtons>
        <Button>
          <LinkBtn to={'cast'} state={{ from: backLink }}>
            Cast
          </LinkBtn>
        </Button>
        <Button>
          <LinkBtn to={'reviews'} state={{ from: backLink }}>
            Reviews
          </LinkBtn>
        </Button>
      </NavButtons>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
