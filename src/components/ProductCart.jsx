import React, { useState } from "react";
import Plus from "../images/Plus.png";
import Check from "../images/Check.png";

const ProductCart = ({ product, addToBasket }) => {
  const { imgSrc, name, price } = product;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBasket = () => {
    addToBasket(product);
    setIsAdded(true);
  };
  return (
    <div className="product-cart">
      <img src={imgSrc} alt={name} />
      <div className="cart-text">
        <p className="product-name-txt">{name}</p>
        <p className="product-price-txt">${price.toFixed(2)}</p>
      </div>
      <button onClick={handleAddToBasket}>
        {isAdded ? (
          <>
            <img src={Check} alt="Check" /> Added
          </>
        ) : (
          <>
            <img src={Plus} alt="Plus" /> Add to cart
          </>
        )}
      </button>
    </div>
  );
};

export default ProductCart;
