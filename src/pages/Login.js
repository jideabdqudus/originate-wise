import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import "./pages.css";
import { Row, Col } from "antd";
import CW from "../assets/cw.svg";

const Login = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#f4f7fa" }}>
        <div className="container" style={{ position: "relative" }}>
          <Row
            style={{
              margin: "0",
              top: "50%",
              transform: "translate(0, 50%)",
            }}
          >
            <Col span={12}>
              <div>
                <img src={CW} alt="Cowrywise" />
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    color: "#0a2e65",
                  }}
                >
                  Welcome back,
                </h1>
                <h1
                  style={{
                    color: "rgba(195, 205, 218, 1)",
                    fontWeight: "bold",
                    fontSize: "2rem",
                  }}
                >
                  Sign in to continue
                </h1>
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <LoginForm />
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
