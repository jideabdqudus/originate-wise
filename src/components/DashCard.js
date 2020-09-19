import React, { Fragment } from "react";
import { Card, Row, Col, Button, Badge } from "antd";
import "./components.css";

import Plan from "../assets/emergency-plan-2.6855725.svg";
import Savings from "../assets/saving-plans.8ae6bb5.svg";
import Chart from "../assets/naira_funds_blue.77b50e2.svg";
import Drop from "../assets/plan.bffb472.svg";
import Box from "../assets/giftbox-white.90fb8b4.svg";
import Fire from "../assets/fire.svg";

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
                <h3
                  style={{
                    marginTop: "20px",
                    color: "rgba(10,46,101)",
                    opacity: ".6",
                  }}
                >
                  Keep going you've started making money moves
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <div style={{ marginTop: "60px", padding: "1rem" }}>
          <h1
            style={{
              color: "rgba(10,46,101)",
              opacity: ".3",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            Save & Invest
          </h1>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Card className="cardHero">
                <img
                  src={Plan}
                  alt="Emergency Plan"
                  height="56px"
                  width="56px"
                />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    Build Emergency Funds
                  </a>
                </p>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="cardHero">
                <img
                  src={Savings}
                  alt="Savings Plan"
                  height="56px"
                  width="56px"
                />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    My Savings Plan
                  </a>
                </p>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="cardHero">
                <img
                  src={Chart}
                  alt="Savings Plan"
                  height="56px"
                  width="56px"
                />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    Invest in mutual funds
                  </a>
                </p>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                className="cardHero"
                style={{
                  backgroundImage: `url(${Drop})`,
                  boxShadow: "0 10px 14px 0 rgba(0,102,245,.37)",
                  paddingLeft: "30px",
                }}
              >
                <img src={Box} alt="Savings Plan" height="56px" width="56px" />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#fff",
                    marginTop: "20px",
                  }}
                >
                  <a style={{ color: "#fff" }} href="#!">
                    REFERRAL GIFTS
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>

      <Fragment>
        <h1
          style={{
            color: "rgba(10,46,101)",
            opacity: ".3",
            fontSize: "40px",
            fontWeight: "600",
          }}
        >
          My Plans
        </h1>
        <Row>
          <Col span={9}>
            <Badge.Ribbon text="REGULAR PLAN MATURITY" title="Amazing Deals">
              <Card
                className="cardHero"
                style={{ backgroundColor: "#e1f6ff", margin: 0 }}
              >
                <p style={{ fontSize: "15px", fontWeight: "500" }}>
                  New House Purchase
                </p>
                <h2
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: "600",
                    color: "#0a2e65",
                  }}
                >
                  <sup
                    style={{
                      fontSize: "1.2rem",
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
                      fontSize: ".3em",
                    }}
                  >
                    .00
                  </sub>
                </h2>
                <hr />
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
        <Row gutter={[24, 24]} style={{ marginTop: "100px" }}>
          <Col span={18}>
            <Card
              title="PORTFOLIO"
              style={{ borderRadius: "7px" }}
              extra={<a href="#!">GET INVESTMENT LETTER</a>}
            >
              <Row>
                <Col span={12}>
                  <div style={{ textAlign: "center", margin: "auto" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "60px",
                        marginBottom: "0px",
                        color: "rgb(10, 46, 101)",
                      }}
                    >
                      Net worth
                    </p>
                    <h1
                      style={{
                        fontSize: "30px",
                        fontWeight: "600",
                        paddingTop: "0px",
                        color: "rgb(10, 46, 101)",
                      }}
                    >
                      ₦0.00
                    </h1>

                    <Badge
                      color="blue"
                      text="Savings"
                      style={{ margin: "10px" }}
                    />
                    <Badge
                      color="cyan"
                      text="Investments"
                      style={{ margin: "10px" }}
                    />
                    <Badge
                      color="grey"
                      text="Stash"
                      style={{ margin: "10px" }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <Col span={24}>
                    <h2
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "rgb(10, 46, 101)",
                      }}
                    >
                      Savings
                      <p
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          color: "#0a2e65",
                          opacity: ".5",
                        }}
                      >
                        <sup
                          style={{
                            fontSize: ".6rem",
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
                      </p>
                    </h2>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "rgb(10, 46, 101)",
                    }}
                  >
                    Investments
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#0a2e65",
                        opacity: ".5",
                      }}
                    >
                      <sup
                        style={{
                          fontSize: ".6rem",
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
                    </p>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "rgb(10, 46, 101)",
                    }}
                  >
                    Stash
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#0a2e65",
                        opacity: ".5",
                      }}
                    >
                      <sup
                        style={{
                          fontSize: ".6rem",
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
                    </p>
                  </Col>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={24}>
                <Card
                  title="SAVING SCORE"
                  style={{ marginBottom: "20px", borderRadius: "7px" }}
                >
                  <h1 style={{ color: "rgb(10, 46,101)", fontSize: "50px" }}>
                    40<span style={{ fontSize: "20px" }}>/100</span>
                  </h1>
                </Card>
              </Col>
              <Col span={24}>
                <Card title="RISK APPETITE" style={{ borderRadius: "7px" }}>
                  <img
                    src={Fire}
                    alt="Burning Appetite"
                    height="56px"
                    width="56px"
                  />
                  <span
                    style={{
                      margin: "10px",
                      fontSize: "20px",
                      color: "gray",
                      fontWeight: "600",
                    }}
                  >
                    You're Balanced
                  </span>
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
