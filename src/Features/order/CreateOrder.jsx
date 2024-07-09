import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { formatCurrency, isValidPhone } from "../../utils/helpers";
// import { createOrder } from "../../services/apiRestaurant";
import { useState } from "react";

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);
    const navigate = useNavigate();
    const data = useActionData();
    const {
        user: { fullname, email },
    } = useAuth();
    const { cart } = useCart();

    const errors = data?.errors;
    let totalPrice = cart.reduce(
        (acc, item) => (acc = acc + item.quantity * item.unitPrice),
        0
    );
    const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
    totalPrice = formatCurrency(totalPrice + priorityPrice);

    return (
        <div className="order order--new container">
            <h3
                className="text-size-h5 mb-3"
                style={{
                    textAlign: `${cart.length === 0 ? "center" : "start"}`,
                }}
            >
                Ready to order? Let's go!
            </h3>
            {cart.length === 0 ? (
                <div className="message messgae__empty">
                    {" "}
                    Your cart is still empty!
                </div>
            ) : (
                <Form method="POST" className="form">
                    <div className="form__field">
                        <div className="form__input-box">
                            <label htmlFor="customer">Full Name:</label>
                            <input
                                id="customer"
                                type="text"
                                name="customer"
                                defaultValue={fullname}
                                placeholder="Full Name..."
                                className="form__input"
                            />
                        </div>
                        {errors?.customer && (
                            <p className="form__error">{errors.customer}</p>
                        )}
                    </div>
                    <div className="form__field">
                        <div className="form__input-box">
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                defaultValue={email}
                                placeholder="Email..."
                                className="form__input"
                            />
                        </div>
                        {errors?.email && (
                            <p className="form__error">{errors.email}</p>
                        )}
                    </div>

                    <div className="form__field">
                        <div className="form__input-box">
                            <label htmlFor="address">Address:</label>
                            <input
                                id="address"
                                type="text"
                                name="address"
                                placeholder="Address..."
                                className="form__input"
                            />
                        </div>
                        {errors?.address && (
                            <p className="form__error">{errors.address}</p>
                        )}
                    </div>

                    <div className="form__field">
                        <div className="form__input-box">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Phone..."
                                className="form__input"
                            />
                        </div>
                        {errors?.phone && (
                            <p className="form__error">{errors.phone}</p>
                        )}
                    </div>

                    <div className="form__field">
                        <div className="form__input-box">
                            <label htmlFor="priority">
                                Want to yo give your order priority?:
                            </label>
                            <input
                                id="priority"
                                type="checkbox"
                                name="priority"
                                className="form__input"
                                value={withPriority}
                                onChange={(e) =>
                                    setWithPriority(e.target.checked)
                                }
                            />
                        </div>
                    </div>

                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />

                    <div className="form__submit-box">
                        <button
                            type="submit"
                            className="form__btn btn btn--primary"
                        >
                            Order Now For {totalPrice}
                        </button>
                        <button
                            type="button"
                            className="form__btn btn btn--ghost"
                            onClick={() => navigate("/menu")}
                        >
                            Cancel
                        </button>
                    </div>
                </Form>
            )}
        </div>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const finalData = {
        errors: {},
        data: {
            ...data,
            cart: JSON.parse(data.cart),
            priority: data.priority === "true",
        },
    };

    if (!isValidPhone(finalData.data.phone))
        finalData.errors.phone = "Invalid phone number!";
    if (finalData.data.customer.trim() === "")
        finalData.errors.customer = "Full name is required!";
    if (finalData.data.email.trim() === "")
        finalData.errors.email = "Email is required!";
    if (finalData.data.address.trim() === "")
        finalData.errors.address = "Address is required!";

    if (Object.keys(finalData.errors).length > 0)
        return { ...finalData, data: {} };

    return redirect("/order");
}

export default CreateOrder;
