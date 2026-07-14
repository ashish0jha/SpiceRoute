import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body'
import About from './Components/About';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import Error from './Components/Error';
import Contact from './Components/Contact';
import IndividualRes from './Components/individualRes';
import Cart from './Components/Cart';
import { useContext, useState } from "react";
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import LoginPage from './Components/LoginPage';
import axios from 'axios';
import { baseUrl } from './utils/constants';
import HomePage from './Components/HomePage';
import OrderHistory from './Components/OrderHistory';
import HelpChat from './Components/HelpChat';

//creating Children Routes
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <IndividualRes />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path:"/orderHistory",
                element:<OrderHistory/>
            },
            {
                path:"/helpdesk",
                element:<HelpChat/>
            }
        ],
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={appStore}>
        <RouterProvider router={AppRouter} />
    </Provider>
);