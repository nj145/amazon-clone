import React, { createContext, useReducer, useEffect } from "react";
import cartReducer from '../reducers/cartReducer';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const initialState = {
    basket: [],
    user: null
};

const StateContext = createContext(null);

export const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // if user logged in, set the user info
                dispatch({
                    type: 'SET_USER',
                    user
                });
            } else {
                // user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const addToBasket = ({ id, title, image, rating, price}) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id,
                title,
                image,
                rating,
                price
            }
        });
    };

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: {
                id
            }
        });
    };

    const getBasketTotal = (basket) => {
        return basket?.reduce((acc, item) => acc + item.price, 0);
    };

    return (
        <StateContext.Provider value={{ ...state, addToBasket, removeFromBasket, getBasketTotal }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateContext;
