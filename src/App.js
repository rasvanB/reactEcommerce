import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/shop" element={<ShopPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
