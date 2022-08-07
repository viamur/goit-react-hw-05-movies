import { NavLink, Outlet } from 'react-router-dom';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className="linkHome">
            Home
          </NavLink>
          <NavLink to="/movies" className="linkMovies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
