import React from "react";
import { PageHeader, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const NavbarTop = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Howdy"
        subTitle="Jide Abdul-Qudus"
        extra={[
          <Button key="1" type="primary" style={{ borderRadius: "30px" }}>
            <LogoutOutlined
              style={{
                fontSize: 20,
                verticalAlign: "top",
              }}
            />
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default NavbarTop;
