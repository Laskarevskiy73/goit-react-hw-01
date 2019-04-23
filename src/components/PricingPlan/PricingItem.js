import React from "react";
import propTypes from "prop-types";

const PricingItem = ({
  item: { icon, label, capacity, description, price }
}) => (
  <div>
    <i src={icon}>
      <img src={icon} alt="icon" />
    </i>
    <h2>{label}</h2>
    <p>{capacity}</p>
    <p>{description}</p>
    <p>${price}/MO</p>
    <button>Get started</button>
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
