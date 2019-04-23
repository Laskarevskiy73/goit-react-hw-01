import React from "react";
import propTypes from "prop-types";
import PricingItem from "./PricingItem";

const PricingPlan = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <PricingItem item={item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: propTypes.array.isRequired
};
export default PricingPlan;
