import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import ProductImage from "../ProductImage";
import ProductTitle from "../ProductTitle";

function ProductCart({ id, title, name, price }) {
  const { items } = useContext(DataContext);

  const filteredList = items.filter((item) => item.id === id);
  const count = filteredList.length;

  const totalProductPrice = count * price;

  return (
    <div className="my-4 flex justify-around items-center ">
      <div className="text-center ml-[-80px]">
        <ProductTitle title={title} />
        <ProductImage name={name} className="w-60 h-48" />
      </div>

      <div className="ml-[-140px] border p-4 border-black">{count}</div>
      <h1 className=" text-xl font-semibold">$ {totalProductPrice}</h1>
    </div>
  );
}

export default ProductCart;
