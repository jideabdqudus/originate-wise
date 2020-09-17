import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./components.css";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card className="cardHero">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
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
          />
        </Form.Item>
        <Form.Item
          name="password"
          style={{color:"#0066f5"}}
          rules={[{ required: true, }]}
        >
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
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="#!">
            <b style={{ color: "#0066f5" }}>Forgot Password?</b>
          </a>
        </Form.Item>

        <Row>
          <Col span={18}>
            {" "}
            <Form.Item>
              <a
                href="#!"
                style={{
                  color: "grey",
                  fontSize: ".9rem",
                  fontWeight: "bold",
                }}
              >
                New user?{" "}
                <b style={{ color: "#0066f5" }}>
                  Create an account
                </b>
              </a>
            </Form.Item>
          </Col>
          <Col span={4}>
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
  );
};

export default LoginForm;
