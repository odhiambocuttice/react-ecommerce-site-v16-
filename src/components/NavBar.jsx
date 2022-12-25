import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export const NavBar = () => {
  const { items } = useContext(DataContext);
  return (
    <nav className="text-gray-500 max-w-4xl p-5 sticky top-0 w-full flex justify-around items-center border-solid border-b-2 border-black">
      <Link to="/">Ecommerce site</Link>

      <div className="flex gap-7">
        <NavLink to="/" activeClassName="link-active" exact={true}>
          Products
        </NavLink>

        <NavLink to="/checkout" activeClassName="link-active">
          <div className="flex">
            Cart
            <div className="text-xs bg-red-600 h-4 w-4 rounded-full flex items-center text-center justify-center">
              {items.length}
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
