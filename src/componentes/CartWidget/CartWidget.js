
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <div>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            { totalQuantity }
            </div>
            
        </Link>
    )
    //     <div>
    //         <FontAwesomeIcon icon={faCartShopping} />
    //         0
    //     </div>
    // )
}
export default CartWidget;



// //import cart from "./assets/cart.png";

// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// 

// const CartWidget = () => {
//     const { totalQuantity } = useContext(CartContext);

//     return (
//         <div className="has-text-link">
//             <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
//                 
//                 {totalQuantity}
//             </Link>
//         </div>
//     );
// };

// export default CartWidget; 