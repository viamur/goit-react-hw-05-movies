import Section from '../../components/Section/Section';
import { useEffect, useState } from 'react';
import api from 'utils/api';
import List from '../../components/List/List';
import s from './Home.module.css';

const status = {
  LOADING: 'loading',
  START: 'start',
  FINISH: 'finish',
  EROR: 'eror',
};

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [statusPage, setStatusPage] = useState(status.START);

  useEffect(() => {
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.trend(page);
        setData(response);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
  }, []);

  return (
    <Section>
      <h1 className={s.title}>Trending today</h1>
      {statusPage === status.FINISH && <List data={data} isHome={true} />}
      {statusPage === status.LOADING && <p>Загрузка</p>} {/* Скелетон надо сделать */}
      {statusPage === status.EROR && <p>Erorr</p>}
    </Section>
  );
};

export default Home;
