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

  return axios
    .post("/api/auth", body, config)
    .then((res) => {
      if (res) {
        console.log(res.data.token);
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

function logout() {
  localStorage.removeItem("token");
}

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

  return axios
    .post("/api/users", body, config)
    .then((res) => {
      if (res) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

function loadUser() {}

export { login, logout, register, loadUser };
