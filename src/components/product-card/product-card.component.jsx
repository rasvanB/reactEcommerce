import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton isInverted onClick={addProductToCart}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default ProductCard;
