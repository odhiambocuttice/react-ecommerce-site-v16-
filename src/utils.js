import { toast } from "react-toastify";

import { productsData } from "./productsData";

// Use the product ID to fetch the details for the specific product
// and display them on the page
export function findProduct(productId) {
  return productsData.find((product) => product.id === Number(productId));
}

// remove a product from the cart list
export function removeProduct(productId) {
  // Find the index of the item with the matching id
  const index = productsData.findIndex((item) => item.id === productId);

  // Use splice to remove the item at the specified index
  productsData.splice(index, 1);

  // Save the updated list back to local storage
  localStorage.setItem("items", JSON.stringify(productsData));

  toast.error("Item Removed", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
}
