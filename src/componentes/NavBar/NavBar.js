import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button>Pollo</button>
                <button>Carne vacuna</button>
                <button>Cerdo</button>
            </div>
            <CartWidget />
        </nav>

    )
}
export default NavBar;