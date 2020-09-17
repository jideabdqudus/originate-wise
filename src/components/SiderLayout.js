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
            <Menu.Item key="1" icon={<BankOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              Plans
            </Menu.Item>
            <Menu.Item key="3" icon={<DatabaseOutlined />}>
              History
            </Menu.Item>
            <Menu.Item key="4" icon={<WalletOutlined />}>
              Stash
            </Menu.Item>
            <Menu.Item key="5" icon={<SmileOutlined />}>
              Referral
            </Menu.Item>
            <Menu.Item key="6" icon={<CreditCardOutlined />}>
              Payment
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
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
            <div
              className="cardHero"
              style={{ padding: 24, minHeight: 360, height: "100vh" }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderLayout;
