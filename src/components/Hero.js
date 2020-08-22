import React from "react";

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1 className="banner__header">Tech Is The Future</h1>
        <p className="banner__words">Take Your Pick</p>
        {children}
      </div>
    </div>
  );
}

export default Hero;
