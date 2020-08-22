import React, { useContext } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { UserContext } from "./../context/user";

export const ScrollButton = () => {
  const { height } = useContext(UserContext);

  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      className={height > 500 ? "scrollbutton" : "scrollbutton  scrollbutton--noshow"}
      onClick={scrollBackToTop}
    >
      <FaAngleDoubleUp />
    </button>
  );
};
