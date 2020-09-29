import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addPlan, getPlan } from "../actions/plansActions";
import { Modal, Row, Col } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import SavingsImg from "../assets/savingstime.svg";
import mastercard from "../assets/mastercard.svg";
import PropTypes from 'prop-types';

const PlanHistory = ({getPlan, plans:{plans, loading} }) => {

  
  useEffect(() => {
    getPlan();
    console.log(getPlan)
    // eslint-disable-next-line
  }, []);


  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  if (plans !== null && plans.length === 0 && !loading) {
    return <h4>Please add a plan</h4>;
  }

  return (
    <div style={{ cursor: "pointer" }}>
      {plans.map((plan) => (
        <Row>
          <Col span={2} onClick={showModal}>
            <img src={SavingsImg} alt="Savings" height="50" />
          </Col>
          <Col span={18} onClick={showModal}>
            <p
              style={{
                color: "#0a2e65",
                fontWeight: "700",
                fontSize: "20px",
                margin: "0px",
              }}
            >
              {plan.title}
            </p>
            <p style={{ color: "gray", fontWeight: "normal" }}>{plan.desc}</p>
          </Col>
          <Col span={4} onClick={showModal}>
            <span
              style={{ color: "#0a2e65", fontSize: "20px", fontWeight: "700" }}
            >
              ₦{" "}
              {`${plan.amount}`
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </span>
          </Col>
          <hr />
          <Modal
            centered
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
          >
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={4} onClick={showModal}>
                    <img src={SavingsImg} alt="Savings" height="50" />
                  </Col>
                  <Col span={20} onClick={showModal}>
                    <span
                      style={{
                        color: "#0a2e65",
                        fontWeight: "700",
                        display: "inline",
                        fontSize: "20px",
                        margin: "0px",
                      }}
                    >
                      {plan.title}
                    </span>
                    <p style={{ color: "gray", fontWeight: "normal" }}>
                      {plan.date}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={12} style={{ marginBottom: "30px" }}>
                    <p style={{ margin: 0, color: "gray" }}>Amount</p>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#0a2e65",
                        margin: 0,
                      }}
                    >
                      ₦{" "}
                      {`${plan.amount}`
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </p>
                  </Col>
                  <Col span={12}>
                    <p style={{ margin: 0, color: "gray" }}>Reference</p>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#0a2e65",
                        margin: 0,
                      }}
                    >
                      {plan.id}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                    <p style={{ margin: 0, color: "gray" }}>Status</p>
                    <CheckCircleTwoTone
                      twoToneColor="#52c41a"
                      style={{ fontSize: "30px" }}
                    />
                  </Col>
                  <Col span={12}>
                    <p style={{ margin: 0, color: "gray" }}>Debit Card</p>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#0a2e65",
                        margin: 0,
                      }}
                    >
                      6716{" "}
                      <img
                        src={mastercard}
                        alt="mastercard"
                        height="20"
                        width="20"
                      />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal>
        </Row>
      ))}
    </div>
  );
};

PlanHistory.propTypes = {
  getPost: PropTypes.func.isRequired,
  plans: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  plans: state.plansReducer
});

export default connect(mapStateToProps, { addPlan, getPlan })(PlanHistory);
