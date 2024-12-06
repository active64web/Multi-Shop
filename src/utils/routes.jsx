import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/product-details",
                    element: <ProductDetails />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/login",
                    element: <Login />
                },
            ],
        },
    ],
);

export default router;





// {
//     future: {
//         v7_startTransition: true,
//     },
// }