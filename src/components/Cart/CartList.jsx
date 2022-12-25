import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import ProductCart from "./ProductCart";

const CartList = () => {
  const { items, totalPrice } = useContext(DataContext);

  const uniqueList = [...new Set(items.map((item) => item.id))].map((id) =>
    items.find((item) => item.id === id)
  );

  return (
    <div className="max-w-4xl w-full ">
      <h1 className="text-3xl font-semibold text-center p-4">Shopping Cart</h1>
      <div className="flex justify-around items-center text-gray-500 text-sm mb-2">
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Total </h3>
      </div>
      <ul>
        {uniqueList.map((item, index) => (
          <div className="">
            <div className="border-solid border-b border-white" />
            <ProductCart
              key={index}
              id={item.id}
              title={item.title}
              name={item.name}
              price={item.amount}
            />
          </div>
        ))}
      </ul>
      <div className="border-solid border-b border-white" />

      <h1 className="text-2xl font-black text-end mx-8 my-4">
        <span className="text-base font-light">Sub Total: </span> ${totalPrice}
      </h1>
    </div>
  );
};

export default CartList;
