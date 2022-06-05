import {
  NavigationContainer,
  LogoContainer,
  OptionsContainer,
  Option,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../firebase/firebase.utils";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
            isCartOpen
              ? dispatch(setIsCartOpen(false))
              : dispatch(setIsCartOpen(true));
          }}
        ></CartIcon>
      </OptionsContainer>
      {isCartOpen && <CartDropdown></CartDropdown>}
    </NavigationContainer>
  );
};

export default Header;
