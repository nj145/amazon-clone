import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import useCartConfig from "../hooks/useStateContext";

const Subtotal = () => {
    const { basket, getBasketTotal } = useCartConfig();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;