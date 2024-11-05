import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../App";
import { Link } from "react-router-dom";
const Nav = () => {
  const items = useContext(ItemContext);
  const [search, setSearch] = useState("");
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const product = items.find((item) =>
        Object.values(item).some(
          (value) => typeof value === "string" && value.includes(search)
        )
      );
      if (product) {
        setFoundItems(product);
      }
    } else {
      setFoundItems([]);
    }
  }, [search]);

  return (
    <nav>
      <ul>
        <input
          placeholder="Search here.."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button>Search</button>
        {foundItems != "" && (
          <div className="foundItems">
            <Link to={`/product/${foundItems.id}`}>{foundItems.name}</Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
