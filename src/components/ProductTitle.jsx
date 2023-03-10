import React from "react";

const ProductTitle = ({ title }) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-2" data-testid="title">
        {title}
      </h1>
    </div>
  );
};

export default ProductTitle;
