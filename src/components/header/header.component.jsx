import React from "react";
import { NavigationContainer, LogoContainer, OptionsContainer, Option } from "./header.styles.jsx";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <Option to="/shop ">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        {currentUser ? (
          <Option to="/" onClick={signOutUser}>
            SIGN OUT
          </Option>
        ) : (
          <Option to="/signin">SIGN IN</Option>
        )}
        <CartIcon
          onClick={() => {
            isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
          }}
        ></CartIcon>
      </OptionsContainer>
      {isCartOpen && <CartDropdown></CartDropdown>}
    </NavigationContainer>
  );
};

export default Header;
