import React from "react";
import "../styles/CheckoutProduct.css";
import useCartConfig from "../hooks/useStateContext";

const CheckoutProduct = ({ item, title, image, rating, price }) => {
    const { removeFromBasket } = useCartConfig();

    const handleRemoveFromBasket = (id) => {
        removeFromBasket(id);
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" ></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, index) => (<span key={index} className="fa fa-star checked"></span>))}
                </div>
                <button onClick={() => handleRemoveFromBasket(item)}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;