import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Delete from "./img/Delete.png";
import Minus from "./img/Minus.png";
import Plus from "./img/Plus.png";

const Cart = ({ cart, setCart }) => {
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();


  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handlePlusQuantity = (id) => {
    const updatedCart = cart.map((item) => {
    if(item.id === id) {
      return {...item, quantity: item.quantity + 1};
    }
    return item;
  })
  setCart(updatedCart);
};

  const handleMinusQuantity = (id) => {
    const updatedCart = cart.map((item) => {
    if (item.id === id && item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1};
    }
    return item;
  });
    setCart(updatedCart);
  };

  useEffect(() => {
    const sum = cart.reduce((total, { price = 0, quantity = 0}) => {
      return total + price * quantity;
    }, 0);
    setTotalSum(sum);
  }, [cart]);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="product">
        {cart.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.imgSrc} alt={item.name} />
            <div className="product-details">
              <p>{item.name}</p>

              <div className="quantity-controls">
                <button
                  onClick={() => handleMinusQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                  <img src={Minus} alt="Minus" />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handlePlusQuantity(item.id)}>
                  <img src={Plus} alt="Plus" />
                </button>
              </div>
            </div>

            <div className="product-controls">
              <button onClick={() => handleRemove(item.id)}>
                <img src={Delete} alt="Delete" />
                Delete
              </button>

              <p className="product-price">
                <span className="price-label">Price: </span>
                <span className="price-value">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-content">
        <div className="button-text">
          <p className="together-quantity">
            <span className="together-label">Together:</span>
            <span className="together-value">
              {cart.reduce((total, item) => total + (item.quantity || 0), 0)}
            </span>
          </p>
          <p className="all-sum">
            <span className="sum-label">Sum:</span>
            <span className="sum-value"> ${totalSum.toFixed(2)}</span>
          </p>
        </div>

        <button
          className="footer-btn"
          onClick={() =>
            navigate("/contact_information", {
              state: {
                cartItems: cart,
                totalSum: totalSum,
              },
            })
          }
          disabled={cart.length === 0}
        >
          Next step
        </button>
      </div>
    </div>
  );
};
export default Cart;
