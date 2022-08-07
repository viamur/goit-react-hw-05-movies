import { useState } from 'react';
import api from '../../utils/api';
import s from './FormSearch.module.css';
import status from '../../utils/status';
import PropTypes from 'prop-types';

const FormSearch = ({ setStatusPage, setData, setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.target.value.trimStart());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
    setSearchParams({ query });

    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.search(query, 1);
        setData(response.results);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChangeInput}
        className={s.input}
      />
      <button type="submit" className={s.btn}></button>
    </form>
  );
};

export default FormSearch;

FormSearch.propTypes = {
  setStatusPage: PropTypes.func,
  setData: PropTypes.func,
  setSearchParams: PropTypes.func,
};
