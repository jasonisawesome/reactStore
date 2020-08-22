import React, { useContext } from "react";
import { ProductContext } from "./../context/products";
import Loading from "./../components/Loading";
import ProductList from "./../components/ProductList";

function Products() {
  const { loading, products } = useContext(ProductContext);
  return loading ? <Loading /> : <ProductList products={products} title={"all product"} />;
}

export default Products;
