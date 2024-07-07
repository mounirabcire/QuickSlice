import CartItem from "./CartItem";

function CartList({cart, dispatch}) {
    return cart.map((item, i) => <CartItem item={item} key={i} dispatch={dispatch} />);
}

export default CartList;
