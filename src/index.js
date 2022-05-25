import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
