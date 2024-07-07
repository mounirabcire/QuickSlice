import { useCart } from "../../contexts/CartContext";

function MenuItem({ menu, num }) {
    const { cart, dispatch } = useCart();
    const { id, name, ingredients, unitPrice, soldOut } = menu;

    const isAdded = cart.some((item) => item.id === id)
        ? cart.find((item) => item.id === id)
        : false;
    const ingredientsLength = ingredients.length;
    const item = {
        id,
        name,
        unitPrice,
        quantity: 1,
        imageUrl: `src/assets/menu__img (${num}).jpg`,
    };

    function checkQuantity() {
        if (isAdded.quantity > 1)
            return dispatch({ type: "cart/removeQuantity", payload: id });
        return dispatch({ type: "cart/delete", payload: id });
    }

    return (
        <div className="menu__item">
            <img
                src={`src/assets/menu__img (${num}).jpg`}
                alt="A pizza"
                className="menu__pizza-img"
            />

            <div className="menu__info">
                <div className="menu__info__ left">
                    <h5 className="menu__info-heading-5">{name}</h5>
                    <p className="menu__info-ingredients">
                        {ingredients.map((item, i) => (
                            <span key={i}>
                                {i !== ingredientsLength - 1
                                    ? `${item}, `
                                    : `${item}.`}
                            </span>
                        ))}
                    </p>
                    <p className="menu__info-price">${unitPrice}.00</p>
                </div>

                <div className="menu__info-left">
                    {!isAdded ? (
                        <button
                            className="btn btn--primary"
                            onClick={() =>
                                dispatch({ type: "cart/add", payload: item })
                            }
                        >
                            Add
                        </button>
                    ) : (
                        <div className="menu__info-params">
                            <div className="menu__info-params--left">
                                <button onClick={checkQuantity}>
                                    <i className="ri-subtract-line"></i>
                                </button>
                                <span>{isAdded.quantity}</span>
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
                            <div className="menu__info-params--right">
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
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
