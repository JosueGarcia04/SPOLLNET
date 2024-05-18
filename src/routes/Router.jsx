import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/Index";
import { Root } from "../pages/Root";
import NotFound from "../pages/404";
import Example from "../pages/developers";
import Faq from '../pages/faq';
import AboutUs from '../pages/about us';
import SignIn from '../pages/forms/Sign-in'
import Profile from '../pages/profile'
import Process from '../pages/processVote'  

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        children: [
            {
                path: "/",
                element: <Index />
            },
            {
                path: "/404",
                element:<NotFound/>
            },
            {
                path:"/developers",
                element:<Example/>
            },
            {
                path:"/faq",
                element:<Faq/>
            },
            {
                path:"/about us",
                element:<AboutUs/>
            },
            {
                path:"Sign-in",
                element:<SignIn/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path:"processVote",
                element: <Process/>
            },
        ]
    }
])