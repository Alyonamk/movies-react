import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { getMovieReviews } from 'API/fetchMovies';
import { ReviewsList, Review, Author, Comment } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        const results = await getMovieReviews(movieId);
        if (results.length === 0) {
          Report.info(
            'No information found =(',
            'There are no reviews on this movie yet',
            'Okay'
          );
        }
        setReviews(results);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.map(({ id, content, author }) => (
            <Review key={id}>
              <div>
                <Author>{author}</Author>
              </div>
              <div>
                <Comment>{content}</Comment>
              </div>
            </Review>
          ))}
        </ReviewsList>
      )}
    </>
  );
};
export default Reviews;
