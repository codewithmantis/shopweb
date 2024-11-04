import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../App";
const Nav = () => {
  const items = useContext(ItemContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    items.map((item) => {
      // Use toLowerCase for case-insensitive search
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        console.log(item.id, item.name);
        return <p key={item.id}>{item.name}</p>; // Added a key for list items
      }
      return null; // Return null if the condition is not met
    });
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
      </ul>
    </nav>
  );
};

export default Nav;
