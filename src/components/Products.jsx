import React, { useContext, useState } from "react";
import { ItemContext } from "../App";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from "./Details";
const Products = () => {
  const items = useContext(ItemContext);
  const [look, setLook] = useState("");

  return (
    <div className="productsCon">
      {items.map((item) => (
        <div className="product" key={item.id}>
          <img src={item.image} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <Link to={`/product/${product.id}`}>See More</Link>
        </div>
      ))}
      <Details productId={look} />
    </div>
  );
};

export default Products;
