import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./../context/user";

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => (user.token ? children : <Redirect to="/login"></Redirect>)}
    ></Route>
  );
}

export default PrivateRoute;
