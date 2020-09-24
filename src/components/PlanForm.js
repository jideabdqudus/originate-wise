import React, { Fragment, useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  RiseOutlined,
  CreditCardOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";
import PlanHistory from "./PlanHistory";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const PLANS_QUERY = gql`
  query plansQuery {
    plans {
      title
      amount
      date
    }
  }
`;

const PlanForm = ({ addPlan }) => {
  const [plan, setPlan] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onSubmit = (e) => {
    addPlan(plan);
    e.preventDefault();
    console.log(plan);
  };
  const onChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <Row>
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item label="Name of Plan">
              <Input
                placeholder="Name of Plan"
                type="text"
                name="title"
                onChange={onChange}
                prefix={<RiseOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item label="Amount">
              <Input
                placeholder="Amount here"
                type="number"
                name="amount"
                onChange={onChange}
                prefix={<CreditCardOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item label="Date">
              <Input
                placeholder="Date Initalized"
                type="date"
                name="date"
                onChange={onChange}
                prefix={<CalendarOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={onSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Query query={PLANS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading</h4>;
              if (error) console.log(error);
              return (
                <div>
                  {" "}
                  {data.plans.map((plan) => (
                    <PlanHistory plan={plan} key={plan.id} />
                  ))}
                </div>
              );
            }}
          </Query>
        </Col>
      </Row>
    </Fragment>
  );
};

PlanForm.propTypes = {
  plans: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plansReducer.plans,
  loading: state.plansReducer.loading,
});

export default connect(mapStateToProps, { addPlan })(PlanForm);
