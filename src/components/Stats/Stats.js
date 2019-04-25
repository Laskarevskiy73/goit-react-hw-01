import React from "react";
import propTypes from "prop-types";
import style from "./Stats.module.css";

export const stats = [
  { id: "id-1", label: ".docx", percentage: 22 },
  { id: "id-2", label: ".pdf", percentage: 4 },
  { id: "id-3", label: ".mp3", percentage: 17 },
  { id: "id-4", label: ".psd", percentage: 47 },
  { id: "id-5", label: ".pdf", percentage: 10 }
];

export const Stats = ({ title = "", stats }) => (
  <section className={style.statsSection}>
    {title !== "" && <h2 className={style.title}>{title}</h2>}
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

Stats.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string,
      percentage: propTypes.number
    })
  )
};
