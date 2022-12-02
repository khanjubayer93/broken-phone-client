import Products from "../Pages/Home/Products/Products";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
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
                path:'/products',
                element: <Products></Products>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
        ]
    }
]);

export default router;