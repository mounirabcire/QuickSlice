import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState = [];

const addItemToCart = (state, payload) => {
    return [...state, payload];
};

const deleteItemFromCart = (state, payload) => {
    return state.filter((item) => item.id !== payload);
};

const updateItemQuantity = (state, payload, increment) => {
    return state.map((item) =>
        item.id === payload
            ? { ...item, quantity: item.quantity + increment }
            : item
    );
};

const clearCart = () => {
    return [];
};

const reducer = (state, action) => {
    switch (action.type) {
        case "cart/add":
            return addItemToCart(state, action.payload);

        case "cart/delete":
            return deleteItemFromCart(state, action.payload);

        case "cart/addQuantity":
            return updateItemQuantity(state, action.payload, 1);

        case "cart/removeQuantity":
            return updateItemQuantity(state, action.payload, -1);

        case "cart/clear":
            return clearCart();

        default:
            throw new Error(`Unknown action type: ${action.type}`);
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
        throw new Error("The context is used outside of its provider!");

    return context;
}

export { CartProvider, useCart };
