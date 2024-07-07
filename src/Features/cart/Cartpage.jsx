import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartList from "./CartList";

function Cartpage() {
    const { cart, dispatch } = useCart();

    const isEmpty = cart.length === 0;
    const totalPrice =
        isEmpty ||
        cart.reduce(
            (acc, item) => (acc = acc + item.quantity * item.unitPrice),
            0
        );
    console.log(cart);

    return (
        <main className="cart">
            <Link className="btn btn--link mb-3" to={"/menu"}>
                Back to menu
            </Link>

            <h2 className="cart__heading-2 text-size-h4 mb-6">Your Cart,</h2>

            <section className="cart__list container">
                {isEmpty ? (
                    <div className="message messgae__empty">
                        {" "}
                        Your cart is Empty!
                    </div>
                ) : (
                    <CartList cart={cart} dispatch={dispatch} />
                )}

                {!isEmpty && (
                    <div className="cart__btns">
                        <button className="btn btn--primary">
                            Order for ${totalPrice}
                        </button>
                        <button
                            className="btn btn--ghost"
                            onClick={() => dispatch({ type: "cart/clear" })}
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Cartpage;
