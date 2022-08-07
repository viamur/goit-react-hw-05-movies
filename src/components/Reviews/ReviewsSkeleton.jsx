import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './Reviews.module.css';

const ReviewsSkeleton = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.author}>
          Author: <Skeleton width={300} />
        </p>
        <p className={s.content}>
          <Skeleton height={100} />
        </p>
      </li>
      <li className={s.item}>
        <p className={s.author}>
          Author: <Skeleton width={300} />
        </p>
        <p className={s.content}>
          <Skeleton height={100} />
        </p>
      </li>
    </ul>
  );
};

export default ReviewsSkeleton;
