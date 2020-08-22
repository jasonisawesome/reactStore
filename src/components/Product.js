import React from "react";
import { Link } from "react-router-dom";

function Product({ image, title, id, price }) {

  return (
    <article className="product">
      <div className="product__container">
        <img src={image} alt={title} className="product__pic" />
        <Link to={`products/${id}`} className="product__link">Details</Link>
      </div>
      <div className="product__footer">
        <p className="product__title">{title}</p>
        <p className="product__price">${price}</p>
      </div>
    </article>
  );
}

export default Product;
