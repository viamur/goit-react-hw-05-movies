import { Suspense } from 'react';
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
      <Suspense fallback={<p>Loading Suspense...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
