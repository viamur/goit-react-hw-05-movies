import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/api';
import s from './Reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    api.reviews(movieId).then(response => setData(response));
    // eslint-disable-next-line
  }, []);

  if (data.length === 0)
    return <p className={s.notInfo}>We don't have any reviews for this movie</p>;
  if (data.length !== 0) {
    return (
      <ul className={s.list}>
        {data.map(el => (
          <li className={s.item}>
            <p className={s.author}>
              <b>Author: </b> {el.author}
            </p>
            <p className={s.content}>{el.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
