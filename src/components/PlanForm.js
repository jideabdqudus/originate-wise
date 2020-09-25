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

const PlanForm = ({ plan: { plans }, addPlan }) => {
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
          {plans.map((plan) => (
            <h1>{plan.title}</h1>
          ))}
        </Col>
      </Row>
    </Fragment>
  );
};

PlanForm.propTypes = {
  plan: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  plan: state.plansReducer,
});

export default connect(mapStateToProps, { addPlan })(PlanForm);
