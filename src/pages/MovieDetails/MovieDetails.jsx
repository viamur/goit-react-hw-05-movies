import Section from '../../components/Section/Section';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../../utils/api';
import s from './MovieDetails.module.css';

const status = {
  LOADING: 'loading',
  START: 'start',
  FINISH: 'finish',
  EROR: 'eror',
};

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [statusPage, setStatusPage] = useState(status.START);

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
      setStatusPage(status.FINISH);
    };

    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.id(movieId);
        dataConversion(response);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();

    // eslint-disable-next-line
  }, []);

  return (
    <Section>
      <Link to={backLink} className={s.btnBack}>
        {`<--Go to back`}
      </Link>
      <div className={s.wrap}>
        <img src={data.img} alt={data.title} height="300" width="200" className={s.img} />
        <div className={s.info}>
          <h2 className={s.title}>
            {data.title}
            <span className={s.year}>({data.year})</span>
          </h2>
          <p className={s.score}>
            User Score: <b>{data.score}%</b>{' '}
          </p>
          <h3 className={s.subtitle}>Overview</h3>
          <p>{data.overview}</p>
          <h3 className={s.subtitle}>Genres</h3>
          <p>{data.genres}</p>
        </div>
      </div>
      <div>
        <h3 className={s.subtitleAdd}>Additional information</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to={'cast'} className="linkAddIfo">
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to={'reviews'} className="linkAddIfo">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
