import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SmileOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import "./components.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/authActions";
import { setAlert } from "../actions/alertActions";
import PropTypes from "prop-types";
import AlertInfo from "../layout/AlertInfo";

const NewAccount = ({ isAuthenticated, register, setAlert }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFinish = async () => {
    if (firstname === "" || lastname === "" || email === "") {
      setAlert("Fields can not be empty", "error");
    } else if (password.length < 8) {
      setAlert("Password has to be longer than that", "warning");
    } else if (lastname === "") {
      setAlert("I need your last name", "warning");
    } else {
      register(firstname, lastname, email, password);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="createForm">
      <AlertInfo />
      <Card className="cardHero">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<SmileOutlined className="site-form-item-icon" />}
              type="text"
              value={firstname}
              name="firstname"
              onChange={onChange}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LikeOutlined className="site-form-item-icon" />}
              type="text"
              value={lastname}
              onChange={onChange}
              name="lastname"
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              name="email"
              onChange={onChange}
              value={email}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item name="password" style={{ color: "#0066f5" }}>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
          </Form.Item>

          <Row>
            <Col span={24}>
              {" "}
              <Form.Item>
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  className="myBtn"
                >
                  Create Account
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

NewAccount.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(NewAccount);
