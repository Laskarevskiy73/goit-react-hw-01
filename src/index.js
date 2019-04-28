import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Stats from './components/Stats/Stats';
import stats from './components/Stats/stats.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';
import PricingPlan from './components/PricingPlan/PricingPlan';
import pricingPlanItems from './components/PricingPlan/pricing-plan.json';
import style from './css/style.module.css';

const App = () => (
  <div className={style.app}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </div>
);
ReactDOM.render(<App />, document.querySelector('#root'));
