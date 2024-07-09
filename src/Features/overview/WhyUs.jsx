import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function WhyUs() {
    const container = useRef();

    useGSAP(
        () => {
            // setting the animation
            gsap.set(".whyus__heading-2", {
                autoAlpha: 0,
                y: 50,
            });
            gsap.set(".whyus__box-item--1", {
                autoAlpha: 0,
                y: 50,
            });
            gsap.set(".whyus__box-item--2", {
                autoAlpha: 0,
                y: 100,
            });
            gsap.set(".whyus__box-item--3", {
                autoAlpha: 0,
                y: 150,
            });
            gsap.set(".whyus__img-box", {
                scale: 0.8,
                transformOrigin: "center",
            });
            gsap.set(".whyus__img", {
                scale: 1.5,
                transformOrigin: "center",
            });

            // animate the chef's image
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom-=65%",
                    end: "+=40%",
                },
            });

            timeline
                .to(".whyus__img-box", {
                    scale: 1,
                    ease: "power3.out",
                    duration: 0.5,
                })
                .to(
                    ".whyus__img",
                    {
                        scale: 1,
                        ease: "power3.out",
                        duration: 1.,
                    },
                    0
                )
                .to(
                    ".whyus__heading-2",
                    {
                        autoAlpha: 1,
                        y: 0,
                        ease: "power3.out",
                        duration: 1.,
                    },
                    0.5
                )
                .to(
                    ".whyus__box-item",
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    0.25
                );
        },
        { scope: container.current }
    );

    return (
        <section className="whyus" ref={container}>
            <div className="whyus__img-box">
                <img
                    src="/assets/chef.png"
                    alt="chef"
                    className="whyus__img"
                />
            </div>

            <div className="whyus__container">
                <h2 className="whyus__heading-2 text-size-h4 mb-6">
                    Why We Stand Out
                </h2>
                <div className="whyus__box">
                    <div className="whyus__box-item whyus__box-item--1">
                        <h4 className="whyus__heading-4 text-size-h5 mb-3">
                            Eco-Friendly Packaging
                        </h4>
                        <p className="whyus__text mb-6">
                            We care about the environment. Our packaging is 100%
                            recyclable and designed to keep your pizza hot while
                            reducing waste.
                        </p>
                        <div className="whyus__rating">
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                        </div>
                    </div>
                    <div className="whyus__box-item whyus__box-item--2">
                        <h4 className="whyus__heading-4 text-size-h5 mb-3">
                            Fresh Ingredients
                        </h4>
                        <p className="whyus__text mb-6">
                            We believe that great pizza starts with the freshest
                            ingredients. Our dough is made daily, our vegetables
                            are sourced locally, and our meats are always of the
                            highest quality.
                        </p>
                        <div className="whyus__rating">
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                        </div>
                    </div>
                    <div className="whyus__box-item whyus__box-item--3">
                        <h4 className="whyus__heading-4 text-size-h5 mb-3">
                            Fast and Reliable Delivery
                        </h4>
                        <p className="whyus__text mb-6">
                            We understand the importance of getting your food
                            hot and on time. Our efficient delivery system
                            ensures your pizza arrives fresh and piping hot,
                            every single time.
                        </p>
                        <div className="whyus__rating">
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-fill"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
