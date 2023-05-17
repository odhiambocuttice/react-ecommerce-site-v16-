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
import { Helmet } from "react-helmet";


function App() {
  return (
    <BrowserRouter>
      <DataProvider>
       <Helmet>
   {/* <!-- Search Engine Tags --> */}
     <meta name="description" content='In the realm where dreams take flight,A poet weaves his words of light.With pen in hand and heart alight,
A tapestry of beauty he shall write.' />
     <meta name="image" content='https://images.unsplash.com/photo-1683918075940-d50beff75d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' />
     <meta name="url" content='https://react-ecommerce-site-v16.vercel.app/' />

     {/* <!-- Facebook Meta Tags --> */}
     {/* <meta property="og:url" content={group && group.link} />
     <meta property="og:type" content="website" />
     <meta property="og:description" content={group && group.description} />
     <meta property="og:title" content={group && group.name} />
     <meta property="og:image" content={group && group.cover_image || ""} /> */}
   </Helmet>
        <div className="flex flex-col justify-center items-center w-full">
          <NavBar />
          <ToastContainer limit={1} />
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/checkout" component={CartList} />
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
