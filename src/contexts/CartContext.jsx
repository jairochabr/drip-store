import { TENNIS } from "@/assets";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.0,
      originalPrice: 219.0,
      image: TENNIS.sneakers,
    },
    {
      id: 2,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.0,
      originalPrice: 219.0,
      image: TENNIS.dunkHigh,
    },
    {
      id: 3,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.0,
      originalPrice: 219.0,
      image: TENNIS.sneakers,
    },
  ]);

  const addToCart = () => {
    const newProduct = {
      id: Date.now(), // Garante ID único
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.0,
      originalPrice: 219.0,
      image: TENNIS.sneakers,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <CartContext.Provider value={{ products, setProducts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
