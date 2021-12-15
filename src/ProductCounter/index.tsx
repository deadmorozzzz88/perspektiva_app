import React from "react";

type ProductCounterPropsType = {
  product: { productName: string; count?: number };
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const { product } = props;
  return (
    <div className="product_counter">
      <h1>{product.productName}</h1>
      <span>{product.count}</span>
    </div>
  );
};

export default ProductCounter;
