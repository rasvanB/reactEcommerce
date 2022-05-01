import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
