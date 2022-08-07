import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};
export default Section;

Section.propTypes = {
  children: PropTypes.array,
};
