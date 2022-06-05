import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItemsArray,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { CItem } from "../../components/cart-item/cart-item.component";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItemsArray) as CItem[];
  const total = useSelector(selectCartTotal) as number;
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: CItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <span className="total">{`TOTAL: $${total}`}</span>
      <PaymentForm></PaymentForm>
    </div>
  );
};

export default CheckoutPage;
