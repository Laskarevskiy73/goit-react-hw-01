import React from 'react';
import propTypes from 'prop-types';
import PricingItem from './PricingItem';
import style from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={style.pricingPlan}>
    {items.map(item => (
      <li className={style.item} key={item.id}>
        {/* <PricingItem item={item} /> */}
        <PricingItem
          price={item.price}
          icon={item.icon}
          label={item.label}
          capacity={item.capacity}
          description={item.description}
        />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: propTypes.arrayOf(propTypes.shape()).isRequired,
};
export default PricingPlan;
