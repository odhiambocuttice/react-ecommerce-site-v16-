import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load items from local storage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      // Parse the stored items to an object
      const ParsedStoredItems = JSON.parse(storedItems);
      setItems(ParsedStoredItems);

      // Calculate the total price of the items in the cart
      const total = ParsedStoredItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );
      setTotalPrice(total);
    }
  }, []);

  // Save items to local storage when they change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function addToCart(item) {
    setItems([...items, item]);
    setTotalPrice(totalPrice + item.amount);
    toast.success(`${item.title} added to Cart`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  }

  return (
    <DataContext.Provider
      value={{
        items,
        setItems,
        totalPrice,
        setTotalPrice,
        addToCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
