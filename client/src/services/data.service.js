import axios from "axios";

function getPrescriptions({ _id }) {
  return axios.get(`/api/prescriptions/${_id}`);
}

export { getPrescriptions };
