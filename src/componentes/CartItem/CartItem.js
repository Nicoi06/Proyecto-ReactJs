import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombre, precio, quantity, img }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };
    console.log('Datos de CartItem:', { id, nombre, precio, quantity, img });

    return (
        <div className="box">
            <ul className="list is-hoverable">
                <li className="list-item">
                    <div className="columns is-vcentered">
                        
                        {/* Columna para la imagen */}
                        <div className="column is-one-quarter">
                            <figure className="image is-128x128">
                                <img src={img} alt={nombre} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                            </figure>
                        </div>

                        {/* Columna para los detalles del producto */}
                        <div className="column">
                            <p className="title is-5">{nombre}</p>
                            <p className="subtitle is-6">Precio: ${precio}</p>
                            <p className="subtitle is-6">Cantidad: {quantity}</p>
                            <p className="has-text-weight-bold">Subtotal: ${precio * quantity}</p>
                        </div>

                        {/* Columna para el botón eliminar */}
                        <div className="column is-one-quarter">
                            <button
                                onClick={handleRemove}
                                className="button is-danger is-fullwidth"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CartItem;