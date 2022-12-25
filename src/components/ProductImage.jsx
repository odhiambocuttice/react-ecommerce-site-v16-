import React from "react";

const ProductImage = ({ name, className }) => {
  return (
    <div className={className}>
      <img
        className="w-full h-full rounded-lg  object-cover"
        src={`/${name}.jpg`}
        alt={name}
      />
    </div>
  );
};

export default ProductImage;
