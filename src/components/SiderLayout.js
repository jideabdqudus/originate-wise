import React from "react";
import { Layout, Menu } from "antd";
import {
  DatabaseOutlined,
  BookOutlined,
  CreditCardOutlined,
  SmileOutlined,
  TeamOutlined,
  WalletOutlined,
  BankOutlined,
} from "@ant-design/icons";
import "./components.css";

import CW from "../assets/cw.svg";
import DashCard from "./DashCard";

const { Header, Content, Footer, Sider } = Layout;

class SiderLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout
        style={{ minHeight: "100vh", backgroundColor: "#f4f7fa !important" }}
      >
        <Sider
          style={{ backgroundColor: "#f4f7fa", border: "none" }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ backgroundColor: "#f4f7fa" }}
          >
            <img
              src={CW}
              alt="Logo"
              style={{
                marginTop: "70px",
                textAlign: "center",
                marginLeft: "20px",
              }}
            />
            <h1 style={{ marginBottom: "20px" }}>Howdy Abdul-Qudus</h1>
            <Menu.Item
              key="1"
              icon={
                <BankOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <BookOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {" "}
              Plans
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <DatabaseOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              History
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                <WalletOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {" "}
              Stash
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={
                <SmileOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Referral
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <CreditCardOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Payment
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={
                <TeamOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {" "}
              Chat
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ backgroundColor: "#f4f7fa" }}>
          <Header
            className="site-layout-background"
            style={{ padding: 0, backgroundColor: "#f4f7fa" }}
          />
          <Content style={{ margin: "0 16px" }}>
            <h1 style={{ textAlign: "center", margin: "10px" }}>
              ACCOUNT OVERVIEW
            </h1>
            <div className="site-layout-background" style={{ padding: 30 }}>
              <DashCard />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2020 Jide Abdul-Qudus || The Qoder{" "}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderLayout;
