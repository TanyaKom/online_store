import React from "react"
import ProductCart from "./ProductCart"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import img7 from "../images/img7.png"
import img8 from "../images/img8.png"
import img9 from "../images/img9.png"
import img10 from "../images/img10.png"

const ProductList = ({ addToBasket }) => {
    const products = [
        {
            id: 1,
            name: "RILOOP Computer Chair, Gaming Chair, Ergonomic Swivel Chair Chair with Footrest, Executive Chair with Arms and Wheels Adjustableng Load-Beacapacity and with Massage Multifunctional Chair/Black",
            price: 398.00,
        },
        {
            id: 2,
            name: "AKRacing AK-Opal Gaming Chair, Black",
            price: 149.99,
        },
        {
            id: 3,
            name: "Lorell Chair, Red/Black",
            price: 199.99,
        },
        {
            id: 4,
            name: "Corsair T1 Race (2023) Gaming Chair, One Size, Black and White",
            price: 79.99,
        },
        {
            id: 5,
            name: "WorkPro® 1000 Series Ergonomic Mesh/Mesh Mid-Back Task Chair, Black/Black, BIFMA Compliant",
            price: 179.99,
        },
        {
            id: 6,
            name: "Realspace® Torval Big & Tall Bonded Leather High-Back Computer Chair, Black/Silver, BIFMA Compliant",
            price: 149.99,
        },
        {
            id: 7,
            name: "Alera ALEEL41ME10B Elusion Series High-Back Multifunction Mesh Chair - Black",
            price: 79.99,
        },
        {
            id: 8,
            name: "Sharkoon Skiller SGS4 Gaming Chair, 58 x 60.5 x 139 cm, Black/White",
            price: 208.00,
        },
        {
            id: 9,
            name: "Itoki YES-A-WR-AEL Gaming Chair, Office Chair, Cross Focus Chair, A X, Movable Armrests, Wine/Gray",
            price: 237.00,
        },
        {
            id: 10,
            name: "RILOOP Computer Chair, Gaming Chair, Ergonomic Swivel Chair Chair with Footrest, Executive Chair with Arms and Wheels Adjustableng Load-Beacapacity and with Massage Multifunctional Chair/Blue",
            price: 259.99,
        },

    ];
    const productImages = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 
    ];
    const productsWithImages = products.map((product, index) => ({
        ...product, 
        imgSrc: productImages[index]

    }));

    return (
        <div className="products-list">
            {productsWithImages.map((product) => (
                <ProductCart
                    key={product.id}
                    product={product}
                    addToBasket={addToBasket}
                    button="Add to cart"
                />
            ))}
        </div>
    );
};

export default ProductList;