import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'API/fetchMovies';
import { ActorsList, Actor, Photo, Details } from './Cast.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import defaultImg from '../../img/1.jpg';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }
  if (cast.length === 0) {
    Report.info(
      'No information found =(',
      'Sorry, we do not have information about the actors',
      'Okay'
    );
  }

  const checkPoster = img => {
    if (!img) {
      return defaultImg;
    }
    return `https://image.tmdb.org/t/p/w500${img}`;
  };

  return (
    <ActorsList>
      {cast.map(({ id, profile_path, name, character }) => (
        <Actor key={id}>
          <Photo src={checkPoster(profile_path)} alt="" />
          <Details>{name}</Details>
          <Details>{character}</Details>
        </Actor>
      ))}
    </ActorsList>
  );
};
export default Cast;
