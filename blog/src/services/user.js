import axios from "axios";

const baseUrl = "/api/users/";

async function getAll() {
  return (await axios.get(baseUrl)).data;
}


export default { getAll };
