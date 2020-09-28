import React from "react";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";

const PlanHistory = ({ plan }) => {
  return (
    <div>
      <div>
        <h1>{plan.title}</h1>
        <h1>{plan.amount}</h1>
        <h1>{plan.date}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  plans: state.plansReducer.plans,
});

export default connect(mapStateToProps, { addPlan })(PlanHistory);
