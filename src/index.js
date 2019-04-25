import React from "react";
import ReactDOM from "react-dom";
import { Profile, user } from "./components/Profile/Profile";
import { Stats, stats } from "./components/Stats/Stats";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import pricingPlanItems from "./components/PricingPlan/pricing-plan.json";
import style from "./css/style.module.css";

const App = () => (
  <div className={style.body}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </div>
);
ReactDOM.render(<App />, document.querySelector("#root"));
