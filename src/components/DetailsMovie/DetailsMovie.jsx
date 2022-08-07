import s from './DetailsMovie.module.css';

const DetailsMovie = ({ data }) => {
  return (
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
  );
};
export default DetailsMovie;
