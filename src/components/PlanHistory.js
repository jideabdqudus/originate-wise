import React from "react";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";

const PlanHistory = ({ plans }) => {
  return (
    <div>
      <div key={plans.title}>
        <h1>{plans.title}</h1>
        <h1>{plans.amount}</h1>
        <h1>{plans.date}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  plans: state.plansReducer.plans,
});

export default connect(mapStateToProps, { addPlan })(PlanHistory);
