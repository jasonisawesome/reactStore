import React from "react";
import Product from "./Product";

function ProductList( {products,title} ) {

  return (
    <section className="section">
      <h1 className="section__title">{title}</h1>
      <div className="section__product">
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
