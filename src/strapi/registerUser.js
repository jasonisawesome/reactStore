import axios from "axios";
import URL from "../URL";

//getting back infomation from form and make post request
const registerUser = async ({ email, password, username }) => {
  const response = await axios
    .post(`${URL}/auth/local/register`, {
      username,
      email,
      password,
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
  return response;
};

export default registerUser;
