import URL from "../URL";
import axios from "axios";

const loginUser = async ({ email, password }) => {
  const response = await axios
    .post(`${URL}/auth/local`, {
      identifier: email,
      password: password,
    })
    .catch((error) => console.log(error));
  return response;
};

export default loginUser;
