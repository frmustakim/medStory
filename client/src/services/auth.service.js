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
        // console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
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
        // localStorage.setItem("token", res.data.token);
      }
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

function loadUser() {
  // Get token from localstorage
  const token = localStorage.getItem("token");

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return axios.get("/api/auth/user", config).then(
    (response) => {
      if (response) {
        // console.log(response.data);
        return response;
      }
    },
    (err) => console.log("No token found")
  );
}

export { login, logout, register, loadUser };
