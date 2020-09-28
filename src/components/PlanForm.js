import React, { Fragment, useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  RiseOutlined,
  CreditCardOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";
import PlanHistory from "./PlanHistory";
import "./components.css";

const PlanForm = ({ plan: { plans }, addPlan }) => {
  const [plan, setPlan] = useState({
    title: "",
    amount: "",
    desc: "",
  });

  const onFinish = () => {
    addPlan(plan);
    console.log(plan);
  };
  const onChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <Row>
        <Col span={8}>
          <Form layout="vertical" onFinish={onFinish}>
            <h3 className="planText">What are you saving for?</h3>{" "}
            <Form.Item
              extra="Examples: My house, Masters at UCLA."
              rules={[
                { required: true, message: "Nah, you have to fill this G" },
              ]}
            >
              <Input
                className="planFormInput"
                placeholder="Enter Plan name"
                type="text"
                required="true"
                name="title"
                onChange={onChange}
                prefix={<RiseOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <h3 className="planText">How much is your goal?</h3>{" "}
            <Form.Item
              extra="The more the merrier yunno.."
              rules={[
                { required: true, message: "You \"can't just skip this" },
              ]}
            >
              <Input
                placeholder="Enter amount here"
                type="number"
                className="planFormInput"
                name="amount"
                required="true"
                onChange={onChange}
                prefix={<CreditCardOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <h3 className="planText">Descriptions don't hurt?</h3>{" "}
            <Form.Item
              rules={[
                { required: true, message: "You \"can't just skip this" },
              ]}
            >
              <Input
                placeholder="Enter description here"
                type="text"
                className="planFormInput"
                name="desc"
                required="true"
                onChange={onChange}
                prefix={<SmileOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="myBtn">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={16}>
          {plans.map((plan) => (
            <PlanHistory plan={plan} />
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
