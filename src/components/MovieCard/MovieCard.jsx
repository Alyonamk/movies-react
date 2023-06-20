import {
  Container,
  Poster,
  MovieInfo,
  Title,
  Release,
  Details,
  Info,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

  return (
    <Container>
      <Poster src={imgUrl} alt="" />
      <MovieInfo>
        <Title>
          {title}
          <Release>({releaseDate})</Release>
        </Title>
        <Details>
          User rate: <Info>{voteScore}</Info>
        </Details>
        <Details>
          Overview: <Info>{overview}</Info>
        </Details>
        <Details>
          Genres: <Info>{genresList}</Info>
        </Details>
      </MovieInfo>
    </Container>
  );
};
