import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './Cast.module.css';

const data = Array(6).fill(null);

const CastSkeleton = () => {
  return (
    <ul className={s.list}>
      {data.map((el, idx) => (
        <li key={idx} className={s.item}>
          <Skeleton width="200px" height="300px" />
          <div className={s.info}>
            <p>
              <Skeleton />
            </p>
            <p>
              <Skeleton />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default CastSkeleton;
