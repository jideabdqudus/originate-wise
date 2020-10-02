import React, { useEffect } from "react";
import SiderLayout3 from "../layout/SiderLayout3";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/authActions";

const History = ({loadUser}) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <SiderLayout3 />
    </div>
  );
};

History.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(History);
