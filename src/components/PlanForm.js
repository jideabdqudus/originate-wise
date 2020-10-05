import React, { Fragment, useState} from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  RiseOutlined,
  CreditCardOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./components.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPlan } from "../actions/plansActions";
import { setAlert } from "../actions/alertActions";
import AlertInfo from "../layout/AlertInfo";

const PlanForm = ({ setAlert, addPlan }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    desc: "",
  });

  const { title, amount, desc } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = async () => {
    if (title === "" || amount === "" || desc === "") {
      setAlert("Please enter all fields", "error");
    } else {
      console.log(formData);
    }
  };
  return (
    <Fragment>
      <Row>
        <AlertInfo />
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
                onChange={onChange}
                required="true"
                value={title}
                name="title"
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
                onChange={onChange}
                value={amount}
                required="true"
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
                value={desc}
                onChange={onChange}
                required="true"
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
      </Row>
    </Fragment>
  );
};

PlanForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addPlan: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(null, { setAlert, addPlan })(
  PlanForm
);
