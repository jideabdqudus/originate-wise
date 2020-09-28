import React, { Fragment, useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {
  RiseOutlined,
  CreditCardOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, connect } from "react-redux";
import { addPlan } from "../actions/plansActions";

const PlanForm = () => {
  const [plan, setPlan] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(plan);
    dispatch(addPlan(plan));
  };
  const onChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <Row>
        <Col span={6}>
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
      </Row>
    </Fragment>
  );
};

export default PlanForm;











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
import { useMutation } from "@apollo/react-hooks";

const ADD_NEW_PLAN = gql`
  mutation addPlan($title: String!, $amount: Int!, $date: String!) {
    addPlan(input: { title: $title, amount: $amount, date: $date }) {
      id
      title
      amount
      date
    }
  }
`;

const PLANS_QUERY = gql`
  query plansQuery {
    plans {
      title
      amount
      date
    }
  }
`;

const PlanForm = () => {
  let title, amount, date;
  const [addPlan] = useMutation(ADD_NEW_PLAN);

  const [plan, setPlan] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onSubmit = (e) => {
    addPlan({
      variables: { title: title.value, amount: amount.value, date: date.value },
    });
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
                ref={value => title = value}
                onChange={onChange}
                prefix={<RiseOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item label="Amount">
              <Input
                placeholder="Amount here"
                type="number"
                name="amount"
                ref={value => amount = value}
                onChange={onChange}
                prefix={<CreditCardOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item label="Date">
              <Input
                placeholder="Date Initalized"
                type="date"
                name="date"
                ref={value => date = value}
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



import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";
import { Modal, Button, Row, Col } from "antd";
import SavingsImg from "../assets/savingstime.svg";

const PlanHistory = ({ plan }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  return (
    <div onClick={showModal}>
      <Row>
        <Col span={2}>
          <img
            src={SavingsImg}
            alt="Savings"
            height="50"
            style={{ display: "block !important" }}
          />
        </Col>
        <Col span={18}>
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {plan.title}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{plan.desc}</p>
        </Col>
        <Col span={4}>
          <span
            style={{ color: "#0a2e65", fontSize: "20px", fontWeight: "700" }}
          >
            ₦ 2,000
          </span>
        </Col>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={()=>setVisible(false)}
          footer={[
            <Button type="primary" key="back" onClick={()=>setVisible(false)}>
              Close
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  plans: state.plansReducer.plans,
});

export default connect(mapStateToProps, { addPlan })(PlanHistory);



import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";
import { Modal, Button, Row, Col } from "antd";
import SavingsImg from "../assets/savingstime.svg";

export class PlanHistory extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={2}>
            <img
              src={SavingsImg}
              alt="Savings"
              height="50"
              style={{ display: "block !important" }}
            />
          </Col>
          <Col span={18}>
            <p
              style={{
                color: "#0a2e65",
                fontWeight: "700",
                fontSize: "20px",
                margin: "0px",
              }}
            >
              {this.props.plan.title}
            </p>
            <p style={{ color: "gray", fontWeight: "normal" }}>
              {this.props.plan.desc}
            </p>
          </Col>
          <Col span={4}>
            <span
              style={{ color: "#0a2e65", fontSize: "20px", fontWeight: "700" }}
            >
              ₦ {this.props.plan.amount}
            </span>
          </Col>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
          maskClosable={true}
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  plans: state.plansReducer.plans,
});

export default connect(mapStateToProps, { addPlan })(PlanHistory);
