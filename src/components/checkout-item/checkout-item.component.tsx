import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { CItem } from "../cart-item/cart-item.component";
import { FC } from "react";

type CheckoutItemProps = {
  cartItem: CItem;
};
const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} srcSet="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemHandler()}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItemHandler()}>
          &#10095;
        </div>
      </span>
      <span className="price">{`$${price}`}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearItemHandler();
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
