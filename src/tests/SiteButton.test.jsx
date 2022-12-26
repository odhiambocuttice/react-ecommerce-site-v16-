import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, fireEvent, screen } from "@testing-library/react";
import SiteButton from "../components/SiteButton";

describe("SiteButton Component", () => {
  it("applies the className prop to the button element", () => {
    render(<SiteButton className="custom-class">Button Text</SiteButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders the children prop as the text of the button", () => {
    render(
      <BrowserRouter>
        <SiteButton>Click me</SiteButton>
      </BrowserRouter>
    );
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("executes the onClick prop when the button is clicked", () => {
    const onClick = jest.fn();
    render(<SiteButton onClick={onClick}>Click me</SiteButton>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders a Link element with the to prop as the button content if to is provided", () => {
    render(
      <BrowserRouter>
        <SiteButton to="/">Click me</SiteButton>
      </BrowserRouter>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
