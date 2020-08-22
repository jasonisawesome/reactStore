import React, { useContext } from "react";
import ProductList from "./ProductList";
import { ProductContext } from "./../context/products";
import Loading from "./Loading";

function FeaturedProducts() {
  const { loading, featured} = useContext(ProductContext);
 return loading ? <Loading /> : <ProductList products={featured} title={"Featured Products"} />;
}

export default FeaturedProducts;


