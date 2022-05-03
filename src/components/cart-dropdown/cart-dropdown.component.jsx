import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item}></CartItem>;
        })}
      </div>
      <Link to="/checkout">
        <CustomButton>Go to checkout</CustomButton>
      </Link>
    </div>
  );
};

export default CartDropdown;
