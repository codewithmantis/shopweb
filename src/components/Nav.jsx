import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../App";
import { Link, useParams, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Tags from "./Tags";
const Nav = () => {
  const items = useContext(ItemContext);
  const [search, setSearch] = useState("");
  const [foundItems, setFoundItems] = useState([]);
  const [tags, setTags] = useState([]);
  const { tag } = useParams();
  useEffect(() => {
    if (search !== "") {
      const product = items.find((item) =>
        Object.values(item).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(search.toLowerCase())
        )
      );

      if (product && !foundItems.includes(product)) {
        setFoundItems((prev) => [...prev, product]);
      }
    } else {
      setFoundItems([]);
    }
  }, [search]);

  useEffect(() => {
    // Use a Set to automatically handle uniqueness
    const uniqueTags = new Set();

    items.forEach((item) => {
      if (item.tags && item.tags.length > 0) {
        uniqueTags.add(item.tags[0]); // Add the first tag to the set
      }
    });

    // Convert Set back to Array and update state
    setTags(Array.from(uniqueTags));
  }, [items]);

  return (
    <>
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
          {foundItems.length >= 1 && (
            <div className="foundItems">
              {foundItems.map((item) => {
                if (!item.title.toLowerCase().includes(search.toLowerCase())) {
                  const matches = item.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                  let index = foundItems.findIndex(
                    (item) => item.title == !matches
                  );
                  foundItems.splice(index, 1);
                }
                return (
                  <div key={item.id} className="foundItem">
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </ul>
      </nav>

      <div className="tags">
        {tags.length > 2 ? (
          tags.map((tag, index) => (
            <div>
              <Link
                style={{ width: "0%", textDecoration: "none" }}
                key={index}
                to={`/${tag}`}
              >
                {tag}
              </Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Nav;
