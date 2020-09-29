import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { setAlert } from "../actions/alertActions";
import PropTypes from "prop-types";
import "./components.css";

const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFinish = async () => {
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="loginForm">
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
              value={password}
              onChange={onChange}
              name="password"
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
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
