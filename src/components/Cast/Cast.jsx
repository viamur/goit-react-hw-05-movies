import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/api';

const Cast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.cast(movieId).then(response => setData(response));
    // eslint-disable-next-line
  }, []);
  return (
    <ul>
      {data.map(el => (
        <li key={el.id}>
          <div>
            <p>Name: {el.name}</p>
            <p>Character: {el.character}</p>
          </div>
          {el['profile_path'] && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${el['profile_path']}`}
              alt={el.name}
              width="200px"
              height="300px"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
