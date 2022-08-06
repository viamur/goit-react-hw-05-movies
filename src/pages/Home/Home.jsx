import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from 'utils/api';
// import api from '../../utils/api';

const Home = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .trend(1)
      .then(response => setData(response))
      .catch(error => console.log(error));
  }, []);
  return (
    <section>
      <h1>Home</h1>
      <ul>
        {data.map(el => (
          <li key={el.id}>
            <Link to={`movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
