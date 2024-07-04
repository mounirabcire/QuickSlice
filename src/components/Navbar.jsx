import { useState } from "react";
import { Link } from "react-router-dom";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";

// Desktop version
const dLinks = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/cart", name: "Cart" },
    { path: "/Order", name: "Order" },
];
// Mobile version
const mLinks = [
    {
        path: "/",
        name: "Home",
        animation: {
            initial: { y: "100%" },
            animate: { y: 0 },
            exit: {
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    {
        path: "/menu",
        name: "Menu",
        animation: {
            initial: { y: "100%" },
            animate: { y: 0 },
            exit: {
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    {
        path: "/cart",
        name: "Cart",
        animation: {
            initial: { y: "100%" },
            animate: { y: 0 },
            exit: {
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
    {
        path: "/Order",
        name: "Order",
        animation: {
            initial: { y: "100%" },
            animate: { y: 0 },
            exit: {
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.3 },
            },
        },
    },
];

function Navbar() {
    // Hooks
    const [isHidden, setIsHidden] = useState(false);
    const [menuIsHidden, setMenuIsHidden] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous && latest > 45) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    // Functions
    const toggleMenu = () => setMenuIsHidden((prev) => !prev);

    return (
        <motion.nav
            className="nav"
            variants={{ vis: { y: "0" }, hid: { y: "-100%" } }}
            animate={`${isHidden ? "hid" : "vis"}`}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
        >
            <div className="container">
                <div className="nav__left">
                    <div className="nav__logo-box">
                        <h3 className="nav__logo text-size-h5">QuickSlice</h3>
                    </div>

                    {/* Desktop version (links) */}
                    <ul className="nav__list nav__list--desk">
                        {dLinks.map((link, i) => (
                            <li key={i} className={`nav__item nav__item--${i + 1}`}>
                                <Link to={link.path}> {link.name} </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile version (links) */}
                    <AnimatePresence mode="wait">
                        {!menuIsHidden && (
                            <motion.ul
                                className="nav__list nav__list--mob"
                                variants={{
                                    initial: { scaleY: 0 },
                                    animate: {
                                        scaleY: 1,
                                        transformOrigin: "top",
                                    },
                                    exit: {
                                        scaleY: 0,
                                        transformOrigin: "bottom",
                                        transition: {
                                            delay: 0.5,
                                            ease: [0.11, 0, 0.5, 0],
                                            duration: 0.4,
                                        },
                                    },
                                }}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{
                                    duration: 0.75,
                                    ease: [0.25, 1, 0.5, 1],
                                }}
                            >
                                <motion.input
                                    type="text"
                                    className="nav__input"
                                    placeholder="Search Order #"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{
                                        scale: 0,
                                        transition: {
                                            duration: 0.5,
                                            ease: [0.25, 1, 0.5, 1],
                                        },
                                    }}
                                    transition={{
                                        delay: 0.75,
                                        duration: 0.5,
                                        ease: [0.25, 1, 0.5, 1],
                                    }}
                                />

                                {mLinks.map((link, i) => {
                                    const { path, name, animation } = link;

                                    return (
                                        <li
                                            key={i}
                                            className={`nav__item nav__item--${
                                                i + 1
                                            }`}
                                        >
                                            <Link to={path}>
                                                <motion.span
                                                    variants={{ ...animation }}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    transition={{
                                                        delay: i * 0.2,
                                                        duration: 1,
                                                        ease: [0.25, 1, 0.5, 1],
                                                    }}
                                                >
                                                    {name}
                                                </motion.span>
                                            </Link>
                                        </li>
                                    );
                                })}
                                <div className="nav__btns-box">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{
                                            y: "-100%",
                                            opacity: 0,
                                            transition: {
                                                duration: 0.7,
                                                ease: [0.25, 1, 0.5, 1],
                                            },
                                        }}
                                        transition={{
                                            delay: 0.7,
                                            duration: 0.7,
                                            ease: [0.25, 1, 0.5, 1],
                                        }}
                                    >
                                        <button className="btn btn--ghost">
                                            Log in
                                        </button>
                                        <button className="btn btn--primary">
                                            Sign up
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                <input
                    type="checkbox"
                    className="nav__checkbox"
                    id="nav-toggle"
                    aria-label="Toggle navigation menu"
                />
                <label
                    className="nav__button"
                    htmlFor="nav-toggle"
                    onClick={toggleMenu}
                >
                    <span className="nav__icon"></span>
                </label>
                <div className="nav__right">
                    <input
                        type="text"
                        className="nav__input"
                        placeholder="Search Order #"
                    />
                    <button className="btn btn--ghost">Log in</button>
                    <button className="btn btn--primary">Sign up</button>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
