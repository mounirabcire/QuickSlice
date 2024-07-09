import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartList from "./CartList";

function Cartpage() {
    const navigate = useNavigate();
    const { cart, dispatch } = useCart();

    const isEmpty = cart.length === 0;

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
                        <button
                            className="btn btn--primary"
                            onClick={() => navigate("/order/new")}
                        >
                            Next
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
