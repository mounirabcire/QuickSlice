import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

function OrderProvider({ children }) {
    const [newOrder, setNewOrder] = useState({});

    function createNewOrder(order) {
        const orderWithId = {
            id: crypto.randomUUID(),
            ...order,
        };
        setNewOrder(orderWithId);

        return orderWithId;
    }

    return (
        <OrderContext.Provider value={{ newOrder, createNewOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

function useOrder() {
    const context = useContext(OrderContext);
    if (!context)
        throw new Error("The context is used outside of its provider!");

    return context;
}

export { OrderProvider, useOrder };
