import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

/* importamos contexto del carrito de compras */


const ItemDetail = ({ id, nombre, img, category, description, precio, stock }) => {
    const [quantityAdded,setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }
        addItem(item, quantity)
    }
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: {precio}
                </p>
            </section>
                <footer className='ItemFooter'>
                    {
                        quantityAdded > 0 ?(
                                    <Link to="/cart" className="Option">Terminar compra</Link>
                                ): (
                                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={1} />
                                )
                                }

                </footer>
            
        </article>
    )
}

export default ItemDetail;