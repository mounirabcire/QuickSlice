import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Header from "./Header";

function Homepage() {

    return (
        <>
            <Header />
            <main>
                <WhyUs />
                <Testimonials />
            </main>
        </>
    );
}

export default Homepage;
