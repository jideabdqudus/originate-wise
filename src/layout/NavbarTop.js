import React from "react";
import { PageHeader, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/authActions";

const NavbarTop = ({ logout, user, isAuthenticated }) => {
  const onClick = () => {
   console.log(user.firstname)
   console.log(user.lastname)
  };

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Howdy"
        subTitle={``}
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
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavbarTop);
