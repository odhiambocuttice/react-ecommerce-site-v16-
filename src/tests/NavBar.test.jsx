import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { DataContext } from "../context/DataContext";
import NavBar from "../components/NavBar";

describe("NavBar Component", () => {
  it("renders the correct number of items in the cart", () => {
    const items = [
      { id: 1, name: "item 1" },
      { id: 2, name: "item 2" },
    ];
    render(
      <BrowserRouter>
        <DataContext.Provider value={{ items }}>
          <NavBar />
        </DataContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
