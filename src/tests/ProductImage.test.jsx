import React from "react";
import { render, screen } from "@testing-library/react";

import ProductImage from "../components/ProductImage";

describe("ProductImage Component", () => {
  it("should render the product image", () => {
    render(<ProductImage name="good-product" className="w-32 h-32" />);
    const imageElement = screen.getByAltText("good-product");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/good-product.jpg");
    expect(imageElement).toHaveClass("w-full h-full rounded-lg object-cover");
  });
});
