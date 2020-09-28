import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGOUT,
} from "./Types";

//Load User
export const loadUser = async () => {
  setAuthToken(localStorage.token);

  try {
    const res = await axios.get("/api/auth");

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

//Register User
export const register = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/users", formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
  }
};

//Login User
export const login = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/auth", formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
  }
};

//Logout
export const logout = () => {
  dispatch({ type: LOGOUT });
};

//Clear errors
export const clearErrors = () => {
  dispatch({ type: CLEAR_ERRORS });
};
