import axios from "axios";

function getPrescriptions({ _id }) {
  return axios.get(`/api/prescriptions/user/${_id}`);
}

function deletePrescription(id) {
  return axios.delete(`/api/prescriptions/${id}`);
}

export { getPrescriptions, deletePrescription };
