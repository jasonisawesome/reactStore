import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from "./../context/products";
import { CartContext } from "../context/cart";
import Loading from "./../components/Loading";

function ProductDetail() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const history = useHistory();
  //id is a string here from routerdom
  const { id } = useParams();
  //find the selected product from products coming from context
  const singleProduct = products.find((items) => items.id === parseInt(id));

  console.log(singleProduct);
  console.log(useParams());
  console.log(products);
  console.log(history);

  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image,
      title,
      price,
      description,
    } = singleProduct;
    return (
      <section className="singleProduct">
        <div className="singleProduct__imgcontainer">
          <img src={image} alt={title} className="singleProduct__img" />
        </div>

        <article className="singleProduct__detail">
          <h1 className="singleProduct__headerOne">{title}</h1>
          <h2 className="singleProduct__headerTwo">${price}</h2>
          <p className="singleProduct__words">
           {description}
          </p>
          <button
            className="singleProduct__button"
            onClick={() => {
              addToCart(singleProduct);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}

export default ProductDetail;
