import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState = [];
const reducer = (state, action) => {
    switch (action.type) {
        case "cart/add":
            return [...state, action.payload];

        case "cart/delete":
            return state.filter((item) => item.id !== action.payload);

        case "cart/addQuantity":
            const stateUpdated = state.filter(
                (item) => item.id !== action.payload
            );
            let item = state.find((item) => item.id === action.payload);
            item = { ...item, quantity: item.quantity + 1 };
            return [...stateUpdated, item];

        case "cart/removeQuantity":
            const stateUpdated_1 = state.filter(
                (item) => item.id !== action.payload
            );
            let item_1 = state.find((item) => item.id === action.payload);
            item_1 = { ...item_1, quantity: item_1.quantity - 1 };
            return [...stateUpdated_1, item_1];

        default:
            throw new Error(`Unkown action type: ${action.type}`);
    }
};

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ cart: state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);
    if (!context)
        throw new Error("The context is used outside of its provider! ");

    return context;
}

export { CartProvider, useCart };
