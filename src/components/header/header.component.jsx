import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        const response = await signOutUser();
        setCurrentUser(null);
    };
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop ">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={signOutHandler}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
