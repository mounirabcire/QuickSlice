import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Lenis from "lenis";
import AppLayout from "./components/AppLayout";
import Homepage from "./Features/overview/Homepage";
import Meunupage, { loader as menuLoader } from "./Features/menu/Meunupage";

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
            children: [
                {
                    path: "/",
                    element: <Homepage />,
                },
                {
                    path: "/menu",
                    element: <Meunupage />,
                    loader: menuLoader,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
