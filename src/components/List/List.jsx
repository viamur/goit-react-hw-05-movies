import { Link, useLocation } from 'react-router-dom';
import s from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ data, isHome }) => {
  const location = useLocation();
  const url = isHome ? 'movies/' : '';

  return (
    <ul className={s.list}>
      {data.map(el => (
        <li key={el.id} className={s.item}>
          <Link to={`${url}${el.id}`} state={{ from: location }} className={s.link}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
};
