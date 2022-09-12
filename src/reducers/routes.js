import Home from '../pages/Home/index';
import Sell from '../pages/Sell';
import React from 'react';

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
        element: <Home />,
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
        element: <Home />,
        path: "/cart"
    },
    {
        header: true,
        title: "Login",
        element: <Sell />,
        path: "/login"
    }
]