import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Product from "../components/Products/Product";

describe("Product Component", () => {
  it("should render product with correct title, description", () => {
    const id = "6";
    const name = "Coffee-Mug";
    const title = "Coffee Mug";
    const description = "This is a description of Coffee";
    const amount = 10;

    render(
      <BrowserRouter>
        <Product
          id={id}
          name={name}
          title={title}
          description={description}
          amount={amount}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
    expect(screen.getByText("View Details")).toBeInTheDocument();
  });
});
