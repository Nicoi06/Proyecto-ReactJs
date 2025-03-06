import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div className="m-5">
            <h1 className="is-size-3 has-text-left">Carrito de compras</h1>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className="has-background-primary-10 p-5">
                <h2 className="has-text-primary-70 ">Total: ${total}</h2>
                <button onClick={() => clearCart()} className="button is-danger m-3">Limpiar carrito</button>
                <Link to="/checkout" className="Option">Checkout</Link>
            </div>

        </div>
    )
}

export default Cart;