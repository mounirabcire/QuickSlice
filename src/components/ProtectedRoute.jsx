import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const {
        user: { isAuth },
    } = useAuth();

    useEffect(() => {
        if (!isAuth) navigate("/register", { replace: true });
    }, [isAuth, navigate]);

    return isAuth ? children : null;
}

export default ProtectedRoute;
