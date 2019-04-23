import React from "react";
import propTypes from "prop-types";

const Stats = ({ title = "", stats }) => (
  <section>
    {title !== "" && <h2>{title}</h2>}
    <ul>
      {stats.map(item => (
        <li key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string,
      percentage: propTypes.number
    })
  )
};

export default Stats;
