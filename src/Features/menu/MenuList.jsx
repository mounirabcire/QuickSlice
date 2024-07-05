import MenuItem from "./MenuItem";

function MenuList({ data }) {
    return data.map((menu, i) => (
        <MenuItem key={i} menu={menu} num={i + 1} />
    ));
}

export default MenuList;
