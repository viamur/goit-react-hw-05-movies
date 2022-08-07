import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../../utils/api';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/home';

  useEffect(() => {
    const dataConversion = obj => {
      const genres = obj.genres.map(genre => genre.name).join(', ');
      const year = obj['release_date'].split('-')[0];
      const score = Math.ceil(obj['vote_average'] * 10);
      const newData = {
        img: `https://image.tmdb.org/t/p/w500/${obj['poster_path']}`,
        title: obj.title,
        genres,
        year,
        score,
        overview: obj.overview,
      };
      setData(newData);
    };
    api.id(movieId).then(response => dataConversion(response));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to={backLink}>Go to back</Link>
      <div className="wrap" style={{ display: 'flex' }}>
        <img src={data.img} alt={data.title} height="300" width="200" />
        <div className="info">
          <h2>
            {data.title}({data.year})
          </h2>
          <p>User Score {data.score}%</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <h4>Genres</h4>
          <p>{data.genres}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
