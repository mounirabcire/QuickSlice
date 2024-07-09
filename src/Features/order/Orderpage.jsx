import { useFetcher } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { useEffect } from "react";

function Orderpage() {
    const fetcher = useFetcher();
    const { cart } = useCart();
    console.log(cart);
    const totalPrice = cart.reduce(
        (acc, item) => (acc = acc + item.quantity * item.unitPrice),
        0
    );
    const pricePriority = totalPrice * 0.2;
    const date = formatDate(new Date().getDate().toString());

    useEffect(() => {
        if (fetcher.state === "idle" && !fetcher.data) {
            fetcher.load("/menu");
        }
    }, [fetcher]);

        return (
            <div className="order order--old container">
                <div className="order__status mb-3">
                    <p className="order__code text-size-h5">
                        Order <span>#{Date.now()}</span>
                    </p>

                    <div className="order__messages">
                        {/* <p className="message message__error message__m-0">
                        PRIORITY
                    </p> */}
                        <p className="message message__success message__m-0">
                            Order created successfully!
                        </p>
                    </div>
                </div>

                <div className="order__time mb-3">
                    {/* <p>Only 66 minutes left</p> */}
                    {/* <p>(Estimated Delivery: Jul 06, 04:05 PM)</p> */}
                    <p>{date}</p>
                </div>

                <div className="order__cart-list mb-3">
                    {cart.map((item, i) => (
                        <div className="cart__item" key={i}>
                            <div className="cart__item--left">
                                <div className="cart__item-info">
                                    <p className="cart__item-name">
                                        <span>{item.name}</span>{" "}
                                        <span>X {item.quantity}</span>
                                    </p>
                                    <p className="cart__item-price">
                                        {formatCurrency(
                                            item.unitPrice * item.quantity
                                        )}
                                    </p>
                                    <p className="cart__item-ingredients">
                                        {fetcher?.data
                                            ?.find((el) => el.id === item.id)
                                            .ingredients.join(",")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="order__summary">
                    <p>Price pizza: {formatCurrency(totalPrice)}</p>
                    <p>Price Priority: {formatCurrency(pricePriority)}</p>
                    <p>
                        To pay on delivery:{" "}
                        {formatCurrency(totalPrice + pricePriority)}
                    </p>
                </div>
            </div>
        );
}

export default Orderpage;
