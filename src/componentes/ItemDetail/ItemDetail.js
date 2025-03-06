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
//     const [quantityAdded,setQuantityAdded] = useState(0);

//     const { addItem } = useContext(CartContext)


//     const handleOnAdd = (quantity) =>{
//         setQuantityAdded(quantity)

//         const item = {
//             id,name,price,img
//         }
//         addItem(item,quantity)
//     }

//     return (

//         <div className="card">
//             <div className="card-content">
//                 <div className="columns is-vcentered">
//                     {/* Columna para la imagen */}
//                     <div className="column is-one-third">
//                         <figure className="image is-4by3">
//                             <img src={img} alt={name} />
//                         </figure>
//                     </div>

//                     {/* Columna para los datos */}
//                     <div className="column">
//                         <div className="content">
//                             <h2 className="title is-4">{name}</h2>
//                             <br/>
//                             <p className="subtitle is-6">Categoría: {category}</p>
//                             <p>Descripción: {description}</p>
                            
//                             <p >Precio unitario: ${price}</p>
//                             {/* Mostrar cantidad seleccionada y precio total */}
//                             {quantityAdded > 0 && (
//                                 <>
//                                     <p className="has-text-weight-bold">
//                                         Cantidad seleccionada: {quantityAdded}
//                                     </p>
//                                     <p className="has-text-weight-bold has-text-info">
//                                         Precio total: ${price * quantityAdded}
//                                     </p>
//                                 </>
//                             )}
//                             {
//                                 quantityAdded > 0 ?(
//                                     <Link to="/cart" className="button is-warning">Terminar compra</Link>
//                                 ): (
//                                     <ItemCount onAdd={handleOnAdd} stock={stock} initial={1} />
//                                 )
//                             }
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

export default ItemDetail;