function CartItem({ item, dispatch }) {
    const { id, imageUrl, name, quantity, unitPrice } = item;

    function checkQuantity() {
        if (quantity > 1)
            return dispatch({ type: "cart/removeQuantity", payload: id });
        return dispatch({ type: "cart/delete", payload: id });
    }

    return (
        <div className="cart__item">
            <div className="cart__item--left">
                <img src={imageUrl} alt="A pizza" className="cart__item-img" />
                <div className="cart__item-info">
                    <p className="cart__item-name">
                        <span>{name}</span>
                        <br />
                        <span>X {quantity}</span>
                    </p>
                    <p className="cart__item-price">${unitPrice * quantity}</p>
                </div>
            </div>
            <div className="cart__item--right">
                <div className="cart__item-params">
                    <div className="cart__item-params--left">
                        <button onClick={checkQuantity}>
                            <i className="ri-subtract-line"></i>
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "cart/addQuantity",
                                    payload: id,
                                })
                            }
                        >
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                    <div className="cart__item-params--right">
                        <button
                            className="btn btn--primary"
                            onClick={() =>
                                dispatch({
                                    type: "cart/delete",
                                    payload: id,
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
