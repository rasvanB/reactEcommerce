import { createContext, useState } from "react";
import SHOP_DATA from "../pages/shop/shop.data";

export const ProductsContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
