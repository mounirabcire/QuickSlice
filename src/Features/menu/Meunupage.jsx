import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuList from "./MenuList";

function Meunupage() {
    const menuData = useLoaderData();
    console.log(menuData);

    return (
        <main className="menu">
            <h2 className="menu__heading-2 text-size-h4 mb-6">
                Explore Our Delicious Pizzas
            </h2>

            <section className="menu__list mb-12">
                <MenuList data={menuData} />
            </section>
        </main>
    );
}

export async function loader() {
    const menu = await getMenu();

    return menu;
}

export default Meunupage;
