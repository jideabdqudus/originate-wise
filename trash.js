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
