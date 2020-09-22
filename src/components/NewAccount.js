import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined, SmileOutlined, LikeOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import "./components.css";

const NewAccount = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="createForm">
      <Card className="cardHero">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstname"
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
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
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
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
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
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            style={{ color: "#0066f5" }}
            rules={[{ required: true }]}
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

          <Row>
            <Col span={24}>
              {" "}
              <Form.Item>
                <Link to="/dashboard">
                  <Button type="primary" block htmlType="submit" className="myBtn">
                    Create Account
                  </Button>
                </Link>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default NewAccount;
