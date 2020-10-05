import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./components.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../actions/alertActions";
import { login, clearErrors } from "../actions/authActions";
import { Redirect } from "react-router";
import AlertInfo from "../layout/AlertInfo";

const LoginForm = (
  { setAlert, error, login, isAuthenticated, clearErrors },
  props
) => {
  useEffect(() => {
    if (error === "Invalid Credentials") {
      setAlert(error, "error");
      clearErrors();
    } //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = async () => {
    if (email === "") {
      setAlert("Please enter all fields", "error");
    } else {
      login(formData);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="loginForm">
      <AlertInfo />
      <Card className="cardHero">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
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
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={onChange}
              name="email"
            />
          </Form.Item>
          <Form.Item style={{ color: "#0066f5" }} rules={[{ required: true }]}>
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
          <Form.Item>
            <a className="login-form-forgot" href="#!">
              <b style={{ color: "#0066f5" }}>Forgot Password?</b>
            </a>
          </Form.Item>

          <Row>
            <Col span={16}>
              {" "}
              <Form.Item>
                <Link
                  to="/create"
                  style={{
                    color: "grey",
                    fontSize: ".9rem",
                    fontWeight: "bold",
                  }}
                >
                  New user?{" "}
                  <b style={{ color: "#0066f5" }}>Create an account</b>
                </Link>
              </Form.Item>
            </Col>
            <Col span={8}>
              {" "}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="myBtn">
                  Log in
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

LoginForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.authReducer.error,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login, clearErrors })(
  LoginForm
);
