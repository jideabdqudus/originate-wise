import React, { useEffect } from "react";
import SiderLayout from "../layout/SiderLayout";
import NavbarTop from "../layout/NavbarTop";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/authActions";

const Dashboard = ({ loadUser, user }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
    <NavbarTop user={user}/>
      <SiderLayout />
    </div>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { loadUser })(Dashboard);
