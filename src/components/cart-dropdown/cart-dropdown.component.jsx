import { DropdownContainer, EmptyMessage, CartItemsContainer } from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <DropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(item => {
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
