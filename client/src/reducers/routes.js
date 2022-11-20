import Home from '../pages/Home/index';
import Sell from '../pages/Sell';
import React from 'react';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Categories from '../pages/Categories';
export const routes = [
    {
        header: false,
        title: "Home",
        element: <Home />,
        path: "/"
    },
    {
        header: true,
        title: "Todays Offer",
        element: <Home />,
        path: "/today-offer"
    },
    {
        header: true,
        title: "Categories",
        element: <Categories />,
        path: "/categories"
    },
    {
        header: true,
        title: "Sell",
        element: <Sell />,
        path: "/sell"
    },
    {
        header: true,
        title: "My Cart",
        element: <Cart />,
        path: "/cart"
    },
    {
        header: true,
        title: "Login",
        element: <Login />,
        path: "/login"
    }
]