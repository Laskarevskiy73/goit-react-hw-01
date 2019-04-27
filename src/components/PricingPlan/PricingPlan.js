import React from 'react';
import propTypes from 'prop-types';
import PricingItem from './PricingItem';
import style from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={style.pricingPlan}>
    {items.map(item => (
      <li className={style.item} key={item.id}>
        <PricingItem item={item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: propTypes.arrayOf(propTypes.shape()).isRequired,
};
export default PricingPlan;
