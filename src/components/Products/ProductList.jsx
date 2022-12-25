import React from "react";

import { productsData } from "../../productsData";
import Product from "./Product";

// Define the main component that will render the list of products
function ProductList() {
  return (
    <div className="flex max-w-3xl justify-around flex-wrap m-4 gap-3">
      {productsData.map((product) => (
        <Product
          key={product.title}
          title={product.title}
          description={product.description}
          amount={product.amount}
          name={product.name}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
