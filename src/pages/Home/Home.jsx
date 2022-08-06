import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from 'utils/api';
// import api from '../../utils/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await api.trend(1);
      setData(response);
    };
    fetch();
  }, []);
  return (
    <section>
      <h1>Home</h1>
      <ul>
        {data.map(el => (
          <li key={el.id}>
            <Link to={`movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
