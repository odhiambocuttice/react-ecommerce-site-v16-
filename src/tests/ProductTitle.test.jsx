import React from "react";
import { render, screen } from "@testing-library/react";
import ProductTitle from "../components/ProductTitle";

describe("ProductTitle Component", () => {
  it("should render the product title", () => {
    const title = "Good Product";
    render(<ProductTitle title={title} />);
    expect(screen.getByText("Good Product")).toBeInTheDocument();
    expect(screen.getByTestId("title").textContent).toBe(title);
  });
});
