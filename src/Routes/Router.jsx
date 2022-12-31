
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Offers from "../Pages/Offers";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/search',
                element: <Search></Search>
            },
            {
                path: '/offers',
                element: <Offers></Offers>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])