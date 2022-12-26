import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

import { DataContext } from "../../context/DataContext";
import { findProduct } from "../../utils";
import ProductImage from "../ProductImage";
import SiteButton from "../SiteButton";

function ProductDetail() {
  // this product ID  from the router
  const { id } = useParams();

  const product = findProduct(id);

  const { addToCart } = useContext(DataContext);

  return (
    <div className="flex flex-col lg:flex-row items-center p-4 my-4 justify-around max-w-4xl">
      <ProductImage name={product.name} className="w-full lg:w-4/6 h-full" />

      <div className="flex flex-col items-center lg:justify-center w-full lg:w-1/2 px-1 py-4 lg:p-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <h3 className="text-xl font-bold">$ {product.amount}</h3>
        </div>

        {/* <p className="text-gray-700 text-base">{product.description}</p> */}
        <LoremIpsum
          p={1}
          avgWordsPerSentence={8}
          avgSentencesPerParagraph={4}
          className="text-gray-400 text-base mt-2 text-justify"
        />
        <SiteButton
          className="bg-blue-500 text-white rounded-md px-3 py-2 mt-2 w-full"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </SiteButton>
      </div>
    </div>
  );
}

export default ProductDetail;
