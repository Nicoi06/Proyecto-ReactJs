
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './carrito.css'

const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <div className='carrito'>
            <FontAwesomeIcon className='carritoicon' icon={faShoppingCart} size="lg" />
            { totalQuantity }
            </div>
            
        </Link>
    )
    
}
export default CartWidget;

