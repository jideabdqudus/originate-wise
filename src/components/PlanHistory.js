import React, { useState } from "react";
import { Modal, Row, Col } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import SavingsImg from "../assets/savingstime.svg";
import mastercard from "../assets/mastercard.svg";

const PlanHistory = () => {
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
            Title
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>Description</p>
        </Col>
        <Col span={4} onClick={showModal}>
          <span
            style={{ color: "#0a2e65", fontSize: "20px", fontWeight: "700" }}
          >
            ₦ {`1221212`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
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
                    Title
                  </span>
                  <p style={{ color: "gray", fontWeight: "normal" }}>Date</p>
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
                    {`121212`
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
                    ID
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
    </div>
  );
};

export default PlanHistory;
