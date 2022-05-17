import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, IconContainer, ItemCount } from "./cart-icon.styles.jsx";
const CartIcon = ({ ...otherProps }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <IconContainer {...otherProps}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
