import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import pizzaSlice from "../../assets/pizza-slice.svg";

function Header() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);
    const sliceY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <header className="header mb-12" ref={ref}>
            <div className="header__box">
                <div className="header__text">
                    <h1 className="header__heading-1 text-size-h3">
                        Freshly <span>Baked</span>, Just for <span>You!</span>
                    </h1>
                    <Link className="btn btn--link" to={"/menu"}>
                        Discover our Menu
                    </Link>
                </div>

                <motion.img
                    src="src/assets/header-img-s.png"
                    alt="Pizza"
                    className="header__img"
                    style={{ y: backgroundY, scale: backgroundScale }}
                />
            </div>

            {/* <motion.img
                    src={pizzaSlice}
                    alt="A slice of pizza"
                    className="header__slice header__slice--1"
                    style={{y: sliceY, rotate: (Math.random() * 360) + 1, scale: (Math.random() * 0.6) + 0.25 }}
                />
                <motion.img
                    src={pizzaSlice}
                    alt="A slice of pizza"
                    className="header__slice header__slice--2"
                    style={{y: sliceY, rotate: (Math.random() * 360) + 1, scale: (Math.random() * 0.6) + 0.25 }}
                />
                <motion.img
                    src={pizzaSlice}
                    alt="A slice of pizza"
                    className="header__slice header__slice--3"
                    style={{y: sliceY, rotate: (Math.random() * 360) + 1, scale: (Math.random() * 0.6) + 0.25 }}
                />
                <motion.img
                    src={pizzaSlice}
                    alt="A slice of pizza"
                    className="header__slice header__slice--4"
                    style={{y: sliceY, rotate: (Math.random() * 360) + 1, scale: (Math.random() * 0.6) + 0.25 }}
                />
                <motion.img
                    src={pizzaSlice}
                    alt="A slice of pizza"
                    className="header__slice header__slice--5"
                    style={{y: sliceY, rotate: (Math.random() * 360) + 1, scale: (Math.random() * 0.6) + 0.25 }}
                />
                <motion.img
                    src={pizzaSlice}
                    alt="A slice of pizza"
                    className="header__slice header__slice--6"
                    style={{y: sliceY, rotate: (Math.random() * 360) + 1, scale: (Math.random() * 0.6) + 0.25 }}
                /> */}
        </header>
    );
}

export default Header;
