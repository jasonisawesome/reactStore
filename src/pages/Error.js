import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="section">
      <h1 className="section__title">Page Not Found</h1>
      <Link to="/" className="btn btn--error">go back home</Link>
    </section>
  );
}

export default Error;
