import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-page">
      {products.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  );
};

export default ShopPage;
