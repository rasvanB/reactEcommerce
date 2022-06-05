import "./cart-item.styles.scss";
import { CategoryItem } from "../../store/categories/categories-reducer";
import { FC } from "react";

export type CItem = CategoryItem & {
  quantity: number;
};

type CartItemProps = {
  cartItem: CItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
