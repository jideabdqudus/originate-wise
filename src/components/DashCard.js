import React, { Fragment } from "react";
import { Card, Row, Col, Button } from "antd";
import {
  TrophyOutlined,
  ThunderboltOutlined,
  ToTopOutlined,
  SendOutlined,
} from "@ant-design/icons";
import "./components.css";

const DashCard = () => {
  return (
    <div>
      <Fragment>
        <Row>
          <Col span={4}>
            <Row>
              <Col
                span={24}
                style={{
                  fontSize: ".95rem",
                  fontWeight: "500",
                  color: "rgba(10,46,101,.5)",
                }}
              >
                Total Balance
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <h2
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: "600",
                    color: "#0a2e65",
                  }}
                >
                  <sup
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: "500",
                      top: "-1em",
                      marginRight: "4px",
                    }}
                  >
                    ₦
                  </sup>
                  0
                  <sub
                    style={{
                      bottom: ".02em",
                      marginLeft: "4px",
                      fontWeight: "700",
                      opacity: ".6",
                      fontSize: ".5em",
                    }}
                  >
                    .00
                  </sub>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Button className="myBtn">ADD MONEY</Button>
          </Col>
          <Col span={16}>
            <Row>
              <Col
                span={24}
                style={{
                  fontSize: ".95rem",
                  fontWeight: "500",
                  color: "rgba(10,46,101,.5)",
                }}
              >
                Portfolio Growth
              </Col>
              <Col span={24}>
                <hr
                  style={{
                    width: "500px",
                    margin: 0,
                    padding: 0,
                    color: "skyblue",
                    marginTop: "30px",
                  }}
                />
              </Col>
              <Col span={24}>
                <h3 style={{marginTop:"20px"}}>Keep going you've started making money moves</h3>
              </Col>
            </Row>
          </Col>
        </Row>
        <h1>Save & Invest</h1>

        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card className="cardHero">
              <TrophyOutlined
                style={{ fontSize: "30px", marginBottom: "40px" }}
              />
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                Build Emergency Funds
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="cardHero">
              <ThunderboltOutlined
                style={{ fontSize: "30px", marginBottom: "40px" }}
              />
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                Build Emergency Funds
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="cardHero">
              <ToTopOutlined
                style={{ fontSize: "30px", marginBottom: "40px" }}
              />
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                Build Emergency Funds
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="cardHero">
              <SendOutlined
                style={{ fontSize: "30px", marginBottom: "40px" }}
              />
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                Build Emergency Funds
              </p>
            </Card>
          </Col>
        </Row>
      </Fragment>
      <Fragment>
        <h1>Save & Invest</h1>

        <Row>
          <Col span={9}>
            <Card className="cardHero">
              <TrophyOutlined
                style={{ fontSize: "30px", marginBottom: "40px" }}
              />
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                Build Emergency Funds
              </p>
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={18}>
            <Card
              title="PORTFOLIO"
              extra={<a href="#!">GET INVESTMENT LETTER</a>}
            >
              <Row>
                <Col span={12}>Hello</Col>
                <Col span={12}>
                  <Col span={24}>Hello</Col>
                  <Col span={24}>Hello</Col>
                  <Col span={24}>Hello</Col>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={24}>
                <Card title="Default size card" extra={<a href="#!">More</a>}>
                  <p>Hello</p>
                </Card>
              </Col>
              <Col span={24}>
                <p>Hello</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};

export default DashCard;
