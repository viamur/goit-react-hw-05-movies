import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import api from 'utils/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const location = useLocation();
  const queryURL = searchParams.get('query') ?? '';

  const handleChangeInput = e => {
    setQuery(e.target.value.trimStart());
  };

  useEffect(() => {
    if (queryURL === '') return;
    setQuery(queryURL);
    setPage(1);
    api.search(queryURL, page).then(response => setData(response.results));
    // eslint-disable-next-line
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
    setSearchParams({ query });
    api.search(query, page).then(response => setData(response.results));
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChangeInput} />
        <button type="submit">Search</button>
      </form>
      {(data.length === 0) & (queryURL !== '') ? (
        <h3>movie not found: {queryURL}</h3>
      ) : (
        <ul>
          {data.map(el => (
            <li key={el.id}>
              <Link to={`${el.id}`} state={{ from: location }}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
