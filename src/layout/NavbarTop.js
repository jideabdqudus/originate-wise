import React from "react";
import { PageHeader, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/authActions";

const NavbarTop = ({ logout, user }) => {
  const onClick = () => {
    console.log("working");
  };

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Howdy"
        subTitle={`${user.firstname} ${user.lastname}`}
        extra={[
          <Button
            key="1"
            type="primary"
            style={{ borderRadius: "30px" }}
            onClick={onClick}
          >
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

NavbarTop.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logout })(NavbarTop);
