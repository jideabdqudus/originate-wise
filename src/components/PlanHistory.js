import React, { useState } from "react";
import { connect } from "react-redux";
import { addPlan } from "../actions/plansActions";
import { Modal, Row, Col } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import SavingsImg from "../assets/savingstime.svg";
import mastercard from "../assets/mastercard.svg";

const PlanHistory = ({ plan }) => {
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

  return (
    <div style={{ cursor: "pointer" }}>
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
                <Col span={12}>
                  <p>Amount</p>
                  <p>
                    {" "}
                    {`${plan.amount}`
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </p>
                </Col>
                <Col span={12}>
                  <p>Reference</p>
                  <p>{plan.id}</p>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <p>Status</p>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                </Col>
                <Col span={12}>
                  <p>Debit Card</p>
                  <span>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  plans: state.plansReducer.plans,
});

export default connect(mapStateToProps, { addPlan })(PlanHistory);
