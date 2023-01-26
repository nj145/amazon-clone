import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useCartState from '../hooks/useStateContext';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
    const { basket, user } = useCartState();
    const loginUser = () => {
        if (user) {
            signOut(auth);
        }
    };
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo"></img>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" ></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={loginUser} className="header__option">
                        <span className="header__optionLine1">Hello {user?.email},</span>
                        <span className="header__optionLine2">{user ? "Sign out" : "Sign in"}</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Header;