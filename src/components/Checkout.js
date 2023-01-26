import React from "react";
import Header from "./Header";
import useCartConfig from '../hooks/useStateContext';
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
    const { basket } = useCartConfig();
    return (
        <>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/abc/Sarah_Selects/1201/KBHP_Takeoverr_1500x300_-_Updated.jpg"
                    alt="ad"></img>
                    {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. You buy one or more items, click "Add to basket" next to the item.</p>
                    </div>
                    ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping Basket</h2>
                        {basket?.map((item, i) => <CheckoutProduct
                                key={i} 
                                item={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />)}
                    </div>
                    )}
                </div>
                {basket.length > 0  && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )}
            </div>
        </>
    );
};

export default Checkout;