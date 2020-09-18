import React, { Fragment } from "react";
import { Card, Row, Col } from "antd";
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
          <Col span={6}>
            <Row>
              <Col span={24}>Total Balance</Col>
            </Row>
            <Row>
              <Col span={24}>₦ 0 .00 </Col>
            </Row>
          </Col>
          <Col span={6}>Hello</Col>
          <Col span={12}>Hello</Col>
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
                <Card title="Default size card" extra={<a href="#!">More</a>}>
                  <p>Hello</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};

export default DashCard;
