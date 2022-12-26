import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import ProductList from "../components/Products/ProductList";
import { productsData } from "../productsData";

describe("ProductList Component", () => {
  it("renders the list of products", () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    const className = "flex max-w-3xl justify-around flex-wrap m-4 gap-3";
    const productList = screen.getByTestId("product-list");

    // Assert that the list of products is not empty
    // eslint-disable-next-line testing-library/no-node-access
    expect(productList.children).toHaveLength(productsData.length);

    expect(productList).toHaveClass(className);
  });
});
