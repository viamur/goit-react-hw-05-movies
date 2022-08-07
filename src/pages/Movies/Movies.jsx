import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import ListSkeleton from '../../components/List/ListSkeleton';
import status from '../../utils/status';
import api from 'utils/api';
import FormSearch from '../../components/FormSerch/FormSearch';
import List from '../../components/List/List';
import s from './Movies.module.css';

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
      {statusPage === status.FINISH && data.length !== 0 && queryURL !== '' && (
        <p className={s.title}>Search result: {queryURL}</p>
      )}
      {statusPage === status.FINISH && data.length === 0 && (
        <p className={s.title}>Your request was not found: {queryURL}</p>
      )}
      {statusPage === status.FINISH && data.length !== 0 && queryURL !== '' && (
        <List data={data} isHome={false} />
      )}
      {statusPage === status.LOADING && <ListSkeleton />} {/* Скелетон надо сделать */}
      {statusPage === status.EROR && <p className={s.title}>Erorr</p>}
      {/* (data.length === 0) & (queryURL !== '')  */}
    </Section>
  );
};

export default Movies;
