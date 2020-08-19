import axios from "axios";

//Login user
function login({ email, password }) {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ email, password });

  return axios.post("/api/auth", body, config);
  // .then(res =>
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     payload: res.data
  //   })
  // )
  // .catch(err => {
  //   dispatch(
  //     returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
  //   );
  //   dispatch({
  //     type: LOGIN_FAIL
  //   });
  // });
}

function logout() {}

//Register user
function register({ name, email, password }) {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  return axios.post("/api/users", body, config);
}

function getCurrentUser() {}

export { login, logout, register, getCurrentUser };
