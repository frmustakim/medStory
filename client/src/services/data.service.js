import axios from "axios";

function getPrescriptions({ user }) {
  return axios.get("/api/prescriptions");
}

export { getPrescriptions };
