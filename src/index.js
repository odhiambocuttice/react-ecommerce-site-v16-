import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import ProductDetail from "./components/Products/ProductDetail";
import ProductList from "./components/Products/ProductList";
import { DataProvider } from "./context/DataContext";

import "./index.css";
import CartList from "./components/Cart/CartList";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="flex flex-col justify-center items-center w-full">
          <NavBar />
          <ToastContainer limit={1} />
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/checkout" component={CartList} />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
