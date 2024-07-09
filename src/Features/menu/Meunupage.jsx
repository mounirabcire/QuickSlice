import { Link, useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuList from "./MenuList";
import { motion } from "framer-motion";
import { useCart } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/helpers";

function Meunupage() {
    const menuData = useLoaderData();
    const { cart } = useCart();

    const isEmpty = cart.length === 0;
    const pizzaQuantity =
        isEmpty || cart.reduce((acc, item) => (acc = acc + item.quantity), 0);
    const totalPrice =
        isEmpty ||
        cart.reduce(
            (acc, item) => (acc = acc + item.quantity * item.unitPrice),
            0
        );
        
    return (
        <main className="menu">
            <h2 className="menu__heading-2 text-size-h4 mb-6">
                Explore Our Delicious Pizzas
            </h2>

            <section className="menu__list mb-12">
                <MenuList data={menuData} />
            </section>

            <motion.div
                className="menu__summary"
                variants={{ vis: { y: "0" }, hid: { y: "100%" } }}
                animate={`${isEmpty ? "hid" : "vis"}`}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                <div className="menu__summary--left">
                    <p>{pizzaQuantity} Pizza</p>
                    <p>{formatCurrency(totalPrice)}</p>
                </div>
                <div className="menu__summary--right">
                    <Link className="btn btn--link" to={'/cart'}>
                        OPEN CART{" "}
                        <span>
                            <i className="ri-arrow-right-line"></i>
                        </span>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}

export async function loader() {
    const menu = await getMenu();

    return menu;
}

export default Meunupage;
