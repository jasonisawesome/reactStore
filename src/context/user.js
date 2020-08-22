import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

function getUserFromLocalStorge() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}

export default function UserProvider({ children }) {
  ///data stays in localstrg after logining in
  const [user, setUser] = useState(getUserFromLocalStorge());
  const [height, setHeight] = useState(0);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = (user) => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };

  useEffect(() => {
    //getting y cordinate on the screen and pass it to scroll button later
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <UserContext.Provider value={{ user, login, logout, height }}>
      {children}
    </UserContext.Provider>
  );
}
