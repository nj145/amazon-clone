import React from "react";
import Header from "./Header";
import Product from "./Product";
import "../styles/Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <img className="home__img" src="https://m.media-amazon.com/images/I/61j7tQlnTxL._SX3000_.jpg" alt="home-img" ></img>
                <div className="home__productRow">
                    <Product
                        id={123}
                        title="JoyJolt Savor Double Wall Insulated Glasses Espresso Mugs (Set of 2) - 5.4-Ounces"
                        rating={4}
                        price={14.40}
                        image="https://m.media-amazon.com/images/I/71ZZ0EqfzrL._AC_UL320_.jpg"
                    />
                    <Product
                        id={124}
                        title="Spare"
                        rating={5}
                        price={22.42}
                        image="https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL381_SR381,381_.jpg"
                    />
                </div>
                <div className="home__productRow">
                    <Product
                        id={125}
                        title="100PCS 3 Ply Black Disposable Face Mask Filter Protection Face Masks"
                        rating={4}
                        price={9.88}
                        image="https://images-na.ssl-images-amazon.com/images/I/617D0j72B1L._AC_UL675_SR675,480_.jpg"
                    />
                    <Product
                        id={126}
                        title="Amazon Fire HD 10 tablet, 10.1, 1080p Full HD, 32 GB, latest model (2021 release), Black"
                        rating={5}
                        price={84.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61uE03cRsyS._AC_UL675_SR675,480_.jpg"
                    />
                    <Product
                        id={127}
                        title="Crocs Unisex-Adult Classic Clogs (Best Sellers)"
                        rating={4}
                        price={32.49}
                        image="https://images-na.ssl-images-amazon.com/images/I/81Vekenn4lL._AC_UL675_SR675,480_.jpg"
                    />
                </div>
                <div className="home__productRow">
                    <Product
                        id={128}
                        title="Hanes Men's Sweatshirt, EcoSmart Fleece Crewneck Sweatshirt, Cotton-Blend Fleece Sweatshirt, Plush Fleece Pullover Sweatshirt"
                        rating={3}
                        price={11.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fyw1U54GL._AC_UL675_SR675,480_.jpg"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;