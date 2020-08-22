import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../URL";

function featuredProducts(data) {
  return data.filter((item) => item.featured === true);
}

//getting image from nested array
function gettingImage(data) {
  return data.map((item) => {
    const image = item.image[0].url;
    return { ...item, image };
  });
}

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios.get(`${URL}/products`);
      //getting featured product from original data array
      const featured = featuredProducts(gettingImage(data));
      setFeatured(featured);
      setProducts(gettingImage(data));
      setLoading(false);
    };
    getData();

    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
