import React, { useContext } from "react";
import { ItemContext } from "../App";
const Products = () => {
  const items = useContext(ItemContext);
  return (
    <div className="productsCon">
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
