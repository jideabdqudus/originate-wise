import React, { Fragment } from "react";
import "./pages.css";
import { Row, Col } from "antd";
import Originate from "../assets/OriginateOrignal.png";
import NewAccount from "../components/NewAccount";
import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";

const CreateAccount = ({
  create: { token, isAuthenticated, loadimg, user, error },
}) => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <Row className="createRow">
            <Col span={12} className="loginHeading">
              <img
                src={Originate}
                alt="Cowrywise"
                height="50px"
                width="200px"
                style={{ marginTop: "20px", marginBottom: "30px" }}
              />
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
                  Howdy,
                </h1>
                <h1
                  style={{
                    color: "rgba(195, 205, 218, 1)",
                    fontWeight: "bold",
                    fontSize: "2.3rem",
                  }}
                >
                  Create a new account
                </h1>
              </div>
            </Col>
            <Col span={12} className="loginHeading">
              {" "}
              <div>
                <NewAccount />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  create: state.authReducer,
});

export default connect(mapStateToProps)(CreateAccount);
