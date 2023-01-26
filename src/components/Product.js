import React from 'react';
import "../styles/Product.css";
import useCartConfig from '../hooks/useStateContext';

const Product = ({ id, title, image, rating, price }) => {
    const { addToBasket } = useCartConfig();
    const handleAddToBasket = () => {
        addToBasket({ id, title, image, rating, price });
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__title'>{title}</p>
                <p className='product__pricing'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_) => (<span className="fa fa-star checked"></span>))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={handleAddToBasket}>Add to basket</button>
        </div>
    );
};

export default Product;