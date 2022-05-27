import {
  DropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemsArray } from "../../store/cart/cart.selector.js";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItemsArray);
  return (
    <DropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}></CartItem>;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>

      <Link to="/checkout">
        <CustomButton>Go to checkout</CustomButton>
      </Link>
    </DropdownContainer>
  );
};

export default CartDropdown;
