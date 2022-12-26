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
    <div className="my-4 lg:flex justify-around items-center">
      <div className="text-center lg:ml-[-80px] md:ml-[-80px] sm:flex-col-reverse mx-auto lg:mx-3 flex flex-col-reverse justify-center items-center">
        <ProductTitle title={title} />
        <ProductImage name={name} className="w-60 h-48" />
      </div>

      <div className="lg:ml-[-80px] lg:border p-4 border-black text-center">
        <span className="lg:hidden text-sm ">Quantity: </span>
        {count}
      </div>
      <h1 className="text-xl font-semibold text-center">
        $ {totalProductPrice}
      </h1>
    </div>
  );
}

export default ProductCart;
