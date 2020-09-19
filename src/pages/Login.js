import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import "./pages.css";
import { Row, Col } from "antd";
import CW from "../assets/cw.svg";

const Login = () => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <Row className="loginRow">
            <Col span={12} className="loginHeading">
              <img src={CW} alt="Cowrywise" style={{ marginTop: "30px" }} />
              <div>
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    color: "#0a2e65",
                    paddingTop: "0",
                    marginTop: "0",
                    lineHeight: "1.2rem",
                  }}
                >
                  Welcome back,
                </h1>
                <h1
                  style={{
                    color: "rgba(195, 205, 218, 1)",
                    fontWeight: "bold",
                    fontSize: "2.3rem",
                  }}
                >
                  Sign in to continue
                </h1>
              </div>
            </Col>
            <Col span={12} className="loginHeading">
              {" "}
              <div>
                <LoginForm />
              </div>
              <Row>
                <Col
                  span={24}
                  style={{ paddingLeft: "10px" }}
                  className="loginHeading"
                >
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
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
