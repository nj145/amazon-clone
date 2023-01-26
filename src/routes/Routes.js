import { useRoutes } from "react-router-dom";
import Login from "../components/Login";
import Checkout from "../components/Checkout";
import Home from "../components/Home";

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/checkout',
            element: <Checkout />
        }
    ]);
}