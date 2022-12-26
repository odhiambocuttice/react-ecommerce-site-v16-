import React from "react";
import { render, screen } from "@testing-library/react";
import ProductAmount from "../components/ProductAmount";

describe("ProductAmount component", () => {
  it("renders the provided amount", () => {
    const amount = 10;
    render(<ProductAmount amount={amount} />);

    expect(screen.getByText(`$ ${amount}`)).toBeInTheDocument();
    expect(screen.getByText(`$ ${amount}`).textContent).toBe(" $ 10");
    expect(screen.getByText(`$ ${amount}`)).toHaveClass("text-red-400");
    expect(screen.getByText(`$ ${amount}`)).toHaveClass("font-bold");
  });
});
