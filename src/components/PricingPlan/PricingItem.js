import React from "react";
import propTypes from "prop-types";
import style from "./PricingPlan.module.css";

const PricingItem = ({
  item: { icon, label, capacity, description, price }
}) => (
  <div className={style.pricingItem}>
    <i className={style.icon}>
      <img className={style.iconImg} src={icon} alt="icon" />
    </i>
    <h2 className={style.label}>{label}</h2>
    <p className={style.capacity}>{capacity} Storage</p>
    <p className={style.description}>{description}</p>
    <p className={style.price}>${price}/MO</p>
    <button className={style.button}>Get started</button>
  </div>
);

PricingItem.propTypes = {
  item: propTypes.shape({
    icon: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    capacity: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.number.isRequired
  })
};

export default PricingItem;
