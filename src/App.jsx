import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";

import Lenis from "lenis";
import AppLayout from "./components/AppLayout";
import Homepage from "./Features/overview/Homepage";
import Meunupage, { loader as menuLoader } from "./Features/menu/Meunupage";
import Cartpage from "./Features/cart/Cartpage";
import Error from "./components/Error";
import Orderpage from "./Features/order/Orderpage";
import CreateOrder from "./Features/order/CreateOrder";
import Signuppage from "./Features/user/Signuppage";

function App() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Homepage />,
                },
                {
                    path: "/menu",
                    element: (
                        <CartProvider>
                            <Meunupage />
                        </CartProvider>
                    ),
                    loader: menuLoader,
                },
                {
                    path: "/cart",
                    element: (
                        <CartProvider>
                            <Cartpage />
                        </CartProvider>
                    ),
                },
                {
                    path: "/order/:orderId",
                    element: <Orderpage />,
                },
                {
                    path: "/order/new",
                    element: <CreateOrder />,
                },
                {
                    path: "/signup",
                    element: <Signuppage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
