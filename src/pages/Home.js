import React from "react";
import { Link } from "react-router-dom";
import Hero from "./../components/Hero";
import FeaturedProducts from './../components/FeaturedProducts';

function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Link to="/products" className="btn btn--product">
          All Products
        </Link>
      </Hero>
      <FeaturedProducts />
    </React.Fragment>
  );
}

export default Home;
