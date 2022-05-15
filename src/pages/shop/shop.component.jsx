import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title]
              .filter((product, index) => index < 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
