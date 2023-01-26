import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            // logged in, redirect to home page
            navigate('/');
        })
        .catch((e) => alert(e.message));
    };

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            // created user, logged in, redirect to Home
            navigate('/');
        })
        .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""></img>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type="submit" className="login__signIn" onClick={login}>Sign in</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice 
                    and our Interest-Based Ads Notice.
                </p>
                <button className="login__register" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;