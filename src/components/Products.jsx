import React, { lazy, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemContext } from "../App";

const Products = () => {
  const items = useContext(ItemContext);
  const { id } = useParams();

  if (id) {
    const product = items.find((item) => item.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
      <div className="productDetail">
        <div className="productImgs">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={product.title} />
          ))}
        </div>
        <main>
          <h1>{product.title}</h1>
          <img src={product.images[0]} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to="/">Go back to products</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="productsCon">
      {items.map((item) => (
        <div className="product" key={item.id}>
          <img loading="lazy" src={item.images[0]} alt={item.name} />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <Link to={`/product/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
