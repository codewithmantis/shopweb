import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemContext } from "../App"; // Update with actual import path

const Products = () => {
  const items = useContext(ItemContext);
  const { id } = useParams(); // Get the product ID from the URL

  // Display individual product details if id exists
  if (id) {
    const product = items.find((item) => item.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>; // Handle product not found
    }

    return (
      <div className="productDetail">
        <div className="productImgs">
          {product.image.map((img) => {
            return <img src={img} />;
          })}
        </div>
        <main>
          <h1>{product.name}</h1>
          <img src={product.image[0]} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          {/* Any additional details about the product */}
          <Link to="/">Go back to products</Link>
        </main>
      </div>
    );
  }

  // If no id, render the list of products
  return (
    <div className="productsCon">
      {items.map((item) => (
        <div className="product" key={item.id}>
          <img src={item.image[0]} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <Link to={`/product/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
