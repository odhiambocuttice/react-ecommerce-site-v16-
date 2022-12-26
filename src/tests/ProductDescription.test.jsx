import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDescription from "../components/ProductDescription";

describe("ProductDescription component", () => {
  it("renders the provided description", () => {
    const description = "This is a product description.";
    render(<ProductDescription description={description} />);

    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
