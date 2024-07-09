import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
    fullname: "",
    email: "",
    password: "",
    isAuth: false,
};

const singup = (payload) => {
    return { ...payload, isAuth: true };
};
const logout = () => {
    return initialState;
};

const reducer = (state, action) => {
    switch (action.type) {
        case "auth/signup":
            return singup(action.payload);

        case "auth/logout":
            return logout();

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ user: state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("The context is used outside of its provider!");

    return context;
}

export { AuthProvider, useAuth };
