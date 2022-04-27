import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
