import './ItemCount.css'
import { useState } from "react";

const ItemCount = ({stock,initial,onAdd})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const handleAdd = () => {
        onAdd(quantity); // Notificar al padre (ItemDetail)
    };

    return(
        <div className="box has-text-centered m-5">
            <div className="nivel level">
            <p className="level-item is-size-4">Cantidad: {quantity}</p>
                
            </div>
            <div className='nivel'>
            <button onClick={decrement} className="button-menos is-danger level-item is-small" style={{width:""}}>-</button>
            <button onClick={increment} className="button-mas is-success level-item is-small" style={{width:""}}>+</button>
            </div>
            <div className="mt-3">
                <button onClick={handleAdd} disabled={!stock} className="button is-primary" style={{width:"auto"}}>Agregar al carrito</button>
                {/* Mostrar mensaje de sin stock */}
                {!stock && (
                    <p className="has-text-danger mt-2">Sin stock</p>
                )}
            </div>
        </div>
    )
}

export default ItemCount;