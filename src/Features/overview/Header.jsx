import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

function Header() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);

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
                    src="../../assets/header-img-s.png"
                    alt="Pizza"
                    className="header__img"
                    style={{ y: backgroundY, scale: backgroundScale }}
                />
            </div>
        </header>
    );
}

export default Header;
