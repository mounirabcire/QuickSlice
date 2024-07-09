import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
    const navigation = useNavigation();
    const { pathname } = useLocation();

    return (
        <>
            <Navbar />
            {navigation.state === "loading" ? (
                <Loader />
            ) : (
                <>
                    <Outlet />
                    {pathname !== "/register" && pathname !== "/order/new" && (
                        <Footer />
                    )}
                </>
            )}
        </>
    );
}

export default AppLayout;
