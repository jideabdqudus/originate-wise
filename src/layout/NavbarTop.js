import React, { useEffect, Fragment } from "react";
import { PageHeader, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, loadUser } from "../actions/authActions";

const NavbarTop = ({ logout, user, loadUser, isAuthenticated }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <PageHeader
      ghost={false}
      title="Howdy"
      subTitle={`${user.firstname}  ${user.lastname}`}
      extra={[
        <Button
          key="1"
          type="primary"
          style={{ borderRadius: "30px" }}
          onClick={onLogout}
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
  );

  const guestLinks = (
    <Fragment>
      {" "}
      <h1>Huh?</h1>
    </Fragment>
  );

  return (
    <div className="site-page-header-ghost-wrapper">
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};

NavbarTop.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logout, loadUser })(NavbarTop);
