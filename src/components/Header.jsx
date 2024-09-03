import React from "react";
import { useNavigate, useLocation } from "react-router-dom"
import Logo from "../images/Logo.png"
import BasketImage from "../images/Basket.png"

const Header = ({ cart }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const productItemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
    <header>
        <div className="logo-part">
            <img src={Logo} alt="Logo" />
            <p>OfficeChairs</p>
        </div>
        <div className="basket-part">
            <button onClick={handleCartClick}>
                <img src={BasketImage} alt="Basket"/>Cart
            </button>
            {location.pathname === "/store" && (
            <span className="products-count">{productItemsCount}</span>
            )}
        </div>
    </header>
    )
}

export default Header;