import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import "./pages.css";
import { Row, Col } from "antd";
import CW from "../assets/cw.svg";

const Login = () => {
  return (
    <Fragment>
      <div>
        <div className="container" style={{ position: "relative" }}>
          <Row
            style={{
              margin: "0",
              transform: "translate(0, 50%)",
            }}
          >
            <Col span={12}>
              <div>
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
              <Row>
                <Col span={18} style={{paddingLeft: "10px"}}>
                  <a
                    href="#!"
                    style={{
                      color: "grey",
                      fontSize: ".9rem",
                      fontWeight: "normal",
                    }}
                  >
                    Trouble signing in?{" "}
                    <b
                      style={{
                        color: "#0066f5",
                        fontSize: ".9rem",
                        fontWeight: "bold",
                      }}
                    >
                      Contact support
                    </b>
                  </a>
                </Col>
                <Col span={6}>
                  <b
                    style={{
                      color: "grey",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                    }}
                  >
                    Privacy | Terms
                  </b>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
