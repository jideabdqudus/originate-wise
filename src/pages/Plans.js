import React, { useEffect } from "react";
import SiderLayout2 from "../layout/SiderLayout2";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/authActions";
import NavbarTop from "../layout/NavbarTop";

const Plans = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
    <NavbarTop/>
      <SiderLayout2 />
    </div>
  );
};

Plans.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Plans);
