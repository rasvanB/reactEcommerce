import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripe/stripe.utils";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
