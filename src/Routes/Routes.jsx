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
import UpdateToys from "../Pages/PrivatePage/MyToys/UpdateToys/UpdateToys";
import AllToys from "../Pages/AllToys/AllToys";

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
            // {
            //     path: "addAToys/:id",
            //     element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/addAToys/${params.id}`)
            // },

            {
                path: "myToys",
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
            },
            {
                path: "/:id",
                element: <PrivateRoutes><UpdateToys></UpdateToys></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            },
            {
                path: "allToys",
                element: <AllToys></AllToys>,

            },




        ],
    },
]);

export default router; 