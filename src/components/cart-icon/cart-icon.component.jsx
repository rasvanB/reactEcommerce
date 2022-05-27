import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selector";
import { ShoppingIcon, IconContainer, ItemCount } from "./cart-icon.styles.jsx";
const CartIcon = ({ ...otherProps }) => {
  const cartCount = useSelector(selectCartCount);
  return (
    <IconContainer {...otherProps}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
