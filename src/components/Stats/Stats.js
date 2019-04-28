import React from 'react';
import propTypes from 'prop-types';
import style from './Stats.module.css';

const Stats = ({ title = '', stats }) => (
  <section className={style.statsSection}>
    {title !== '' && <h2 className={style.title}>{title}</h2>}
    <ul className={style.statList}>
      {stats.map(item => (
        <li className={style.item} key={item.id}>
          <span className={style.label}>{item.label}</span>
          <span className={style.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
  stats: [],
};

Stats.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ),
};

export default Stats;
