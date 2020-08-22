import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import registerUser from "../strapi/registerUser";
import loginUser from "./../strapi/loginUser";
import { UserContext } from "../context/user";

function Login() {
  const { login } = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //assume user is registered initially
  const [username, setUsername] = useState("default");
  const [registered, setRegistered] = useState(true);

  // isempty evalutes to false once everything gets filled
  let isEmpty = !email || !password || !username;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (registered) {
      response = await loginUser({ email, password });
      console.log(response);
    } else {
      response = await registerUser({ email, password, username });
    }

    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token: token, username: username };
      login(newUser);
      alert(`You have logged in as ${username}`);
      history.push("/products");
    } else {
      alert("Password or Email Address is incorrect, please try again");
    }
  };

  const toggleMember = () => {
    setRegistered((prevStatus) => {
      const userStatus = !prevStatus;
      userStatus ? setUsername("default") : setUsername("");
      return userStatus;
    });
  };

  return (
    <section className="section section--login">
      <h2 className="section__title">{registered ? "Sign In" : "Sign Up"}</h2>
      <form className="loginform">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!registered && (
          <div className="form-control">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* showing empty warning  or showing submit button */}
        {isEmpty ? (
          <p className="emptyWarning">Please fill out the form</p>
        ) : (
          <button type="submit" onClick={handleSubmit} className="loginform__button">
            Submit
          </button>
        )}
        <p>
          {registered ? "Don't have an account ? " : "Already a Member ? "}
          <button type="button" onClick={toggleMember} className="loginform__button">
            Click Here
          </button>
        </p>
      </form>
    </section>
  );
}

export default Login;
