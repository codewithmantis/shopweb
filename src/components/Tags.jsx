import React, { useEffect, useContext, useState } from "react";
import { ItemContext } from "../App";
import { useParams } from "react-router-dom";

const Tags = () => {
  const { tag } = useParams();
  const items = useContext(ItemContext);
  const [products, setProducts] = useState([]);

  // This effect runs only when the `tag` changes
  useEffect(() => {
    const filteredProducts = items.filter((item) => item.tags[0] === tag);
    setProducts(filteredProducts);
  }, [tag, items]); // Add `items` as a dependency if the context value can change
  if (tag) {
    return (
      <div>
        <h1>{tag}</h1>
        <div className="productsCon">
          {products.length > 0 ? (
            products.map((item) => (
              <div className="product" key={item.id}>
                {/* Assuming 'id' is a unique identifier for each item */}
                <img loading="lazy" src={item.images[0]} alt={item.name} />
                <p>{item.title}</p>
                <p>${item.price}</p>
                {/* Add any other properties you want to display */}
              </div>
            ))
          ) : (
            <p>No products found for this tag.</p>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Tags;
