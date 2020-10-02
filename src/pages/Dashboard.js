import React, { useEffect } from "react";
import SiderLayout from "../layout/SiderLayout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/authActions";

const Dashboard = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <SiderLayout />
    </div>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Dashboard);
