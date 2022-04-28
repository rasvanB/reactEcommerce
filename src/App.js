import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/shop" element={<ShopPage />} />
                    <Route exact path="/signin" element={<SignInPage />} />
                </Routes>
            </div>
        );
    }
}

export default App;
