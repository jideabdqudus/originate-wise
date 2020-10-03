import React from "react";
import {
  PageHeader,
  Descriptions,
  Menu,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const NavbarTop = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Howdy"
        subTitle="Jide Abdul-Qudus"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default NavbarTop;
