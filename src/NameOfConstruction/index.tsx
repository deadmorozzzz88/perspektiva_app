import React from "react";

type ProducCardPropsType = {
  productName: string;
  productDescription: string;
  picture: string;
};

const NameOfConstruction: React.FC<ProducCardPropsType> = (props) => {
  const { productName, productDescription, picture } = props;
  return (
    <div className="product_card">
      <h1>{productName}</h1>
      <div className="construction_description">{productDescription}</div>
      <img src={picture} alt="" />
    </div>
  );
};

export default NameOfConstruction;
