import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/api';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    api.reviews(movieId).then(response => setData(response));
    // eslint-disable-next-line
  }, []);

  if (data.length === 0) return <p>We don't have any reviews for this movie</p>;
  if (data.length !== 0) {
    return (
      <ul>
        {data.map(el => (
          <li>
            <p>Author: {el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
