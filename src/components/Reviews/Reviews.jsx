import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import status from '../../utils/status';
import api from 'utils/api';
import s from './Reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [statusPage, setStatusPage] = useState(status.START);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.reviews(movieId);
        setData(response);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  if (statusPage === status.FINISH) {
    if (data.length === 0)
      return <p className={s.notInfo}>We don't have any reviews for this movie</p>;
    if (data.length !== 0) {
      return (
        <ul className={s.list}>
          {data.map((el, idx) => (
            <li className={s.item} key={idx}>
              <p className={s.author}>
                <b>Author: </b> {el.author}
              </p>
              <p className={s.content}>{el.content}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
  if (statusPage === status.LOADING) {
    return <p>Loading...</p>;
  }

  if (statusPage === status.LOADING) {
    return <p>Eror...</p>;
  }
};

export default Reviews;
