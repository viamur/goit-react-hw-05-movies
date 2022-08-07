import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/api';
import s from './Cast.module.css';

const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.cast(movieId).then(response => setData(response));
    // eslint-disable-next-line
  }, []);
  return (
    <ul className={s.list}>
      {data.map(el => (
        <li key={el.id} className={s.item}>
          {el['profile_path'] ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${el['profile_path']}`}
              alt={el.name}
              width="200px"
              height="300px"
            />
          ) : (
            <img
              src="https://dummyimage.com/200x300/faebd7/000000.jpg&text=photo+not+found"
              width="200px"
              height="300px"
            />
          )}
          <div className={s.info}>
            <p>
              <b>Name: </b> {el.name}
            </p>
            <p>
              <b>Character: </b> {el.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
