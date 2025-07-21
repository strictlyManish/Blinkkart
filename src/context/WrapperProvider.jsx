import { nanoid } from "nanoid";
import React, { createContext, useContext, useState } from "react";

const WrapperContext = createContext();

export const WrapperProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      name: "Wireless Headphones",
      disc: "Comfortable over-ear headphones with noise cancellation.",
      price: 135,
      url: "/src/assets/third_headphones.png",
      id: nanoid(),
    },
    {
      name: "Wireless Headphones",
      disc: "Sleek design with 40-hour battery life and quick charge.",
      price: 150,
      url: "src/assets/forth.png",
      id: nanoid(),
    },
    {
      name: "Wireless Headphones",
      disc: "Bluetooth 5.3 headphones with voice assistant support.",
      price: 110,
      url: "/src/assets/fifth_headphones.png",
      id: nanoid(),
    },
    {
      name: "Wireless Headphones",
      disc: "Foldable and lightweight headphones for travel use.",
      price: 99,
      url: "/src/assets/sixth_headphones.png",
      id: nanoid(),
    },
    {
      name: "Laptop",
      disc: "High-performance laptop with sleek design and powerful specs.",
      price: 950,
      url: "src/assets/first_laptop.png",
      id: nanoid(),
    },
    {
      name: "Wireless Headphones",
      disc: "Bluetooth 5.3 headphones with voice assistant support.",
      price: 110,
      url: "/src/assets/fifth_headphones.png",
      id: nanoid(),
    },
    {
      name: "Wireless Headphones",
      disc: "Foldable and lightweight headphones for travel use.",
      price: 99,
      url: "/src/assets/sixth_headphones.png",
      id: nanoid(),
    },
    {
      name: "Laptop",
      disc: "High-performance laptop with sleek design and powerful specs.",
      price: 950,
      url: "/src/assets/first_laptop.png",
      id: nanoid(),
    },
    
  ]);

  return (
    <WrapperContext.Provider value={{ product, setProduct }}>
      {children}
    </WrapperContext.Provider>
  );
};

export const useWrapper = () => useContext(WrapperContext);
