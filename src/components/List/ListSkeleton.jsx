import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './List.module.css';

const ListSkeleton = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
      <li className={s.item}>
        <Skeleton width={500} className={s.link} />
      </li>
    </ul>
  );
};

export default ListSkeleton;
