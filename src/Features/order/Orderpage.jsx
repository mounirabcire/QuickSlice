function Orderpage() {
    return (
        <div className="order order--old container">
            <div className="order__status mb-3">
                <p className="order__code text-size-h5">
                    Order <span>#1D5XXS</span>
                </p>

                <div className="order__messages">
                    <p className="message message__error message__m-0">
                        PRIORITY
                    </p>
                    <p className="message message__success message__m-0">
                        PREPARING ORDER
                    </p>
                </div>
            </div>

            <div className="order__time mb-3">
                <p>Only 66 minutes left</p>
                <p>(Estimated Delivery: Jul 06, 04:05 PM)</p>
            </div>

            <div className="order__cart-list mb-3"></div>

            <div className="order__summary">
                <p>Price pizza: $129.00</p>
                <p>Price Priority: $20.00</p>
                <p>To pay on delivery: $155.00</p>
            </div>
        </div>
    );
}

export default Orderpage;
