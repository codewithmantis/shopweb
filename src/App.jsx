import { createContext } from "react";
import Nav from "./components/Nav";
import Products from "./components/products";
const items = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality wireless headphones with noise cancellation.",
    price: 89.99,
    image:
      "https://i.pinimg.com/originals/86/c1/ac/86c1ac8bac43ea337f7fe9da5c87a7fd.png",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    description: "A great laptop for gaming, editing and learning!",
    price: 15.99,
    image:
      "https://pngfile.net/download/hmqN9DyP0hCGtNqBKfD2ZKxc9PtUF6CefiVe8eCoIc1jfjhLfZ1hE22CIUjNnVFXkQnGN7S1EQ99L9XqyDhRXbwUpGvRaRbC79mwRSEpNe8eVuuxch4ss2rBTTxYeXBjHvfrgNQajnLjlKk1SE1UvdURqn1XSOgBLMqz3dJ6YtOnxSvlHHbq8GcbVaiB0qVzn8VNbCxC/large",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
    price: 49.99,
    image:
      "https://redragonshop.com/cdn/shop/files/LegendChromaM990-RGBGamingMouse_2.png?v=1684908549",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and high volume.",
    price: 79.99,
    image:
      "https://static.vecteezy.com/system/resources/previews/027/144/874/non_2x/futuristic-bluetooth-portable-speaker-isolated-on-transparent-background-png.png",
    category: "Electronics",
  },
];

export const ItemContext = createContext();

function App() {
  return (
    <div>
      <ItemContext.Provider value={items}>
        <Nav />
        <Products />
      </ItemContext.Provider>
    </div>
  );
}

export default App;
