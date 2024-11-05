import { createContext } from "react";
import Nav from "./components/Nav";
import Products from "./components/products";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality wireless headphones with noise cancellation.",
    price: 89.99,
    image: [
      "https://i.pinimg.com/originals/86/c1/ac/86c1ac8bac43ea337f7fe9da5c87a7fd.png",
    ],
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    description: "A great laptop for gaming, editing and learning!",
    price: 1115.99,
    image: [
      "https://pngfile.net/download/hmqN9DyP0hCGtNqBKfD2ZKxc9PtUF6CefiVe8eCoIc1jfjhLfZ1hE22CIUjNnVFXkQnGN7S1EQ99L9XqyDhRXbwUpGvRaRbC79mwRSEpNe8eVuuxch4ss2rBTTxYeXBjHvfrgNQajnLjlKk1SE1UvdURqn1XSOgBLMqz3dJ6YtOnxSvlHHbq8GcbVaiB0qVzn8VNbCxC/large",
      "https://th.bing.com/th/id/OIP.H8bG3ATDC6jDAznkvz9l3QHaGP?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.6Tjpw0D1JrHyhzKYlLd0uQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.DOrJeD7r0KvXVZwHz_YxZAHaFf?w=271&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ],
    category: "Electronics",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
    price: 49.99,
    image: [
      "https://redragonshop.com/cdn/shop/files/LegendChromaM990-RGBGamingMouse_2.png?v=1684908549",
    ],
    category: "Electronics",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and high volume.",
    price: 79.99,
    image: [
      "https://static.vecteezy.com/system/resources/previews/027/144/874/non_2x/futuristic-bluetooth-portable-speaker-isolated-on-transparent-background-png.png",
    ],
    category: "Electronics",
  },
];

export const ItemContext = createContext();

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Products />
    </div>
  );
};

function App() {
  return (
    <div>
      <ItemContext.Provider value={items}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<Products />} />
          </Routes>
        </Router>
      </ItemContext.Provider>
    </div>
  );
}
export default App;
