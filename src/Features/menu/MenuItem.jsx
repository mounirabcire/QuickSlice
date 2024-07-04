function MenuItem({ menu }) {
    const { id, name, imageUrl, ingredients, unitPrice, soldOut } = menu;
    const ingredientsLength = ingredients.length;

    return (
        <div className="menu__item">
            <img src={imageUrl} alt="A pizza" className="menu__pizza-img"/>

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
                    <div className="btn btn--primary">Add</div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
