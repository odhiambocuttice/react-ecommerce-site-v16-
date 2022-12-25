import React from "react";

const ProductAmount = ({ amount }) => {
  return (
    <div>
      <span className="text-red-400 font-bold"> $ {amount}</span>
    </div>
  );
};

export default ProductAmount;
