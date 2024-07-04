import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Testimonials() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });

    useGSAP(() => {
        // Setting animation
        document.querySelectorAll(".testi__item").forEach((item) => {
            gsap.set(item, {
                scale: gsap.utils.random(1.25, 3),
                filter: `blur(${gsap.utils.random(15, 50)}px)`,
            });
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom+=300px start",
                scrub: true,
                pin: true,
            },
        });

        for (let i = 0; i < 6; i++) {
            timeline
                .to(
                    `.testi__item--${i + 1}`,
                    {
                        filter: "blur(0px)",
                        scale: 1,
                        duration: 5,
                        ease: "power3.out",
                    },
                    i
                )
                .to(
                    `.testi__item--${i + 1}`,
                    {
                        scale: gsap.utils.random(0.2, 0.8),
                        filter: `blur(${gsap.utils.random(15, 50)}px)`,
                        duration: 5,
                        ease: "power3.out",
                    },
                    i + 4.25
                );
        }
    });

    return (
        <section className="testi" ref={container}>
            <h2 className="testi__heading-2 text-size-h4">
                Our Customers Love Us
            </h2>
            <div className="testi__item testi__item--1">
                Quick delivery and the pizza is always perfect. Love it!
            </div>
            <div className="testi__item testi__item--2">
                Great prices and even better pizza. Highly recommend!
            </div>
            <div className="testi__item testi__item--3">
                The customization options are fantastic. My family loves it!
            </div>
            <div className="testi__item testi__item--4">
                Amazing service and hot, tasty pizzas every time.
            </div>
            <div className="testi__item testi__item--5">
                The quality and taste are unmatched. My go-to for pizza night!
            </div>
            <div className="testi__item testi__item--6">
                Best pizza in town! Fresh, delicious, and fast delivery.
            </div>
        </section>
    );
}

export default Testimonials;
