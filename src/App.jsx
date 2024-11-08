import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"; // Make sure to import correctly
import Products from "./components/Products";
import Tags from "./components/Tags";

export const ItemContext = createContext();

function App() {
  const [itemsData, setItemsData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      console.log("ERROR");
      return;
    }

    const data = await response.json();
    setItemsData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HomePage = () => {
    return (
      <div>
        <Nav />
        <Tags />
        <Products />
      </div>
    );
  };
  return (
    <ItemContext.Provider value={itemsData}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path=":tag" element={<Tags />} />
        </Routes>
      </Router>
    </ItemContext.Provider>
  );
}

export default App;
