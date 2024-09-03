import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.css";
import { getCurrentDate } from "../Cart/ dateUtils";
import CheckImage from "./images/Check.png";
import ContactInfoImg from "./images/Contact.png";
import ShipmentInfoImg from "./images/Shipment.png";
import OrderSummary from "./images/Order.png";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentDate = getCurrentDate();
  const { cartItems, contactInfo, shipmentInfo, totalSum } =
    location.state || {};

  return (
    <>
      <div className="order-page">
        <div className="order-text">
          <img src={CheckImage} alt="Check" />
          <h3>Thank you for your order!</h3>
          <p className="text">
            The order confirmation email with details of your order and a link
            to track its progress has been sent to your email address.
          </p>
          <h4>Your order # is 000000003 - PENDING</h4>
          <p className="order-date">Order Date: {currentDate}</p>
        </div>

        <div className="order-contacts">
          <div className="contact-info">
            <div className="contact-info-header">
              <img src={ContactInfoImg} alt="Contact" />
              <h4>Contact information</h4>
            </div>
            {contactInfo && (
              <>
                <p>
                  {contactInfo.firstName} {contactInfo.lastName}
                </p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.phone}</p>
              </>
            )}
          </div>

          <div className="shipment-info">
            <div className="shipment-info-header">
              <img src={ShipmentInfoImg} alt="Shipment" />
              <h4>Shipment information</h4>
            </div>
            {shipmentInfo && (
              <>
                <p>
                  {shipmentInfo.address}, {shipmentInfo.apartment}
                </p>
                <p>
                  {shipmentInfo.city}, {shipmentInfo.state}, {shipmentInfo.zip}
                </p>
                <p>{shipmentInfo.country}</p>
              </>
            )}
          </div>
        </div>

        <div className="order-summary">
          <div className="order-summary-header">
            <img src={OrderSummary} alt="Order summary" />
            <h4>Order summary</h4>
          </div>
          {cartItems &&
            cartItems.map((product, index) => (
              <React.Fragment key={index}>
                <div key={index} className="order-product-item">
                  <img src={product.imgSrc} alt={product.name} />
                  <div className="product-data">
                    <p className="order-product-name">{product.name}</p>
                    <p className="order-product-price">
                      ${product.price}, {product.quantity} product
                    </p>
                  </div>
                </div>
                <hr className="product-divider" />
              </React.Fragment>
            ))}

          <div className="summary-section">
            <p className="summary-txt">
              <span className="subtotal-label">Subtotal:</span>
              <span className="value">${totalSum}</span>
            </p>
            <p className="summary-txt">
              <span className="subtotal-label">Shipping & Handling:</span>
              <span className="value">$0.00</span>
            </p>
            <p className="summary-txt">
              <span className="subtotal-label">Tax:</span>
              <span className="value">$0.00</span>
            </p>
            <p className="total-sum">
              <span className="subtotal-label">Grand Total:</span>

              <span className="value">${totalSum}</span>
            </p>
          </div>
        </div>

        <button
          className="order-page-button"
          onClick={() => navigate("/store")}
        >
          Continue shopping
        </button>
      </div>
    </>
  );
};
export default Order;
