import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ProductAmount from "../ProductAmount";
import ProductDescription from "../ProductDescription";
import ProductImage from "../ProductImage";
import ProductTitle from "../ProductTitle";
import SiteButton from "../SiteButton";

import { DataContext } from "../../context/DataContext";
import { findProduct } from "../../utils";

// A component that displays each individual product
function Product({ id, name, title, description, amount }) {
  const { addToCart } = useContext(DataContext);

  const product = findProduct(id);

  return (
    <div className=" bg-white rounded-lg p-4 my-4 shadow-xl">
      <ProductImage name={name} className="w-72 h-48 mb-4 " />
      <div>
        <ProductTitle title={title} />
        <ProductDescription description={description} />
        <ProductAmount amount={amount} />
      </div>
      <div className="border my-2 border-black" />
      <div className="flex justify-between">
        <SiteButton
          className="border border-black text-black rounded-md px-3 py-2 text-xs"
          to={`/products/${id}`}
        >
          View Details
        </SiteButton>
        <SiteButton
          className="bg-blue-500 text-white rounded-md px-3 py-2 text-xs"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </SiteButton>
      </div>
    </div>
  );
}

export default Product;
