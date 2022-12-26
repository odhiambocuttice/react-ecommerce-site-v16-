import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import CartList from "../components/Cart/CartList";
import { DataContext } from "../context/DataContext";
import { productsData } from "../productsData";

describe("CartList component", () => {
  it("CartList displays the total price", () => {
    const totalPrice = 40;

    const items = [
      { name: "item 2", amount: 10 },
      { name: "item 4", amount: 30 },
    ];
    render(
      <BrowserRouter>
        <DataContext.Provider value={{ items, totalPrice }}>
          <CartList />
        </DataContext.Provider>
      </BrowserRouter>
    );

    const totalPriceElement = screen.getByTestId("sub-total");
    expect(totalPriceElement.textContent).toBe("Sub Total:");
    expect(screen.getByTestId("total-price").textContent).toBe("Sub Total:$40");
  });
});
