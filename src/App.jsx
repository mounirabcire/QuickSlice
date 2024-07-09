import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

import Lenis from "lenis";
import AppLayout from "./components/AppLayout";
import Homepage from "./Features/overview/Homepage";
import Meunupage, { loader as menuLoader } from "./Features/menu/Meunupage";
import Cartpage from "./Features/cart/Cartpage";
import Error from "./components/Error";
import Orderpage from "./Features/order/Orderpage";
import CreateOrder, {
    action as orderAction,
} from "./Features/order/CreateOrder";
import ProtectedRoute from "./components/ProtectedRoute";
import Registerpage from "./Features/user/Registerpage";
import { OrderProvider } from "./contexts/OrderContext";

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
            element: (
                <AuthProvider>
                    <CartProvider>
                        <OrderProvider>
                            <AppLayout />
                        </OrderProvider>
                    </CartProvider>
                </AuthProvider>
            ),
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Homepage />,
                },
                {
                    path: "/menu",
                    element: (
                        <ProtectedRoute>
                            <Meunupage />
                        </ProtectedRoute>
                    ),
                    loader: menuLoader,
                },
                {
                    path: "/cart",
                    element: <Cartpage />,
                },
                {
                    path: "/order",
                    element: (
                        <ProtectedRoute>
                            <Orderpage />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/order/new",
                    element: (
                        <ProtectedRoute>
                            <CreateOrder />
                        </ProtectedRoute>
                    ),
                    action: orderAction,
                },
                {
                    path: "/register",
                    element: <Registerpage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
