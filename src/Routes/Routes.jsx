import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAToy from "../Pages/PrivatePage/AddAToy/AddAToy";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import MyToys from "../Pages/PrivatePage/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "addAToy",
                element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>,
            },
            {
                path: "myToys",
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
            },
        ],
    },
]);

export default router; 