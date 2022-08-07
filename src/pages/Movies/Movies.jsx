import Section from '../../components/Section/Section';
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import api from 'utils/api';
import FormSearch from '../../components/FormSerch/FormSearch';
import List from '../../components/List/List';
import s from './Movies.module.css';

const status = {
  LOADING: 'loading',
  START: 'start',
  FINISH: 'finish',
  EROR: 'eror',
};
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [statusPage, setStatusPage] = useState(status.START);

  const queryURL = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryURL === '') return;
    setPage(1);
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.search(queryURL, page);
        setData(response.results);
        setStatusPage(status.FINISH);
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
      <FormSearch
        setStatusPage={setStatusPage}
        setData={setData}
        setSearchParams={setSearchParams}
      />
      {statusPage === status.FINISH && data.length !== 0 && (
        <p className={s.title}>Search result: {queryURL}</p>
      )}
      {statusPage === status.FINISH && data.length === 0 && (
        <p className={s.title}>Your request was not found: {queryURL}</p>
      )}
      {statusPage === status.FINISH && data.length !== 0 && <List data={data} isHome={false} />}
      {statusPage === status.LOADING && <p className={s.title}>Загрузка</p>}{' '}
      {/* Скелетон надо сделать */}
      {statusPage === status.EROR && <p className={s.title}>Erorr</p>}
      {/* (data.length === 0) & (queryURL !== '')  */}
    </Section>
  );
};

export default Movies;
