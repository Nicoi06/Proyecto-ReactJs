import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

/* fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="container my-5">
            <Link to="/">
                <h3 className="title has-text-danger  has-text-centered p-5">Carniceria "Las Lilas"</h3>
            </Link>
            <div className="is-flex is-align-items-center is-justify-content-center">
                <NavLink to={`/`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>

                    Home&nbsp; <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink to={`/category/pollo`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Pollos</NavLink>
                {/* <button className="button is-primary m-3">Celulares</button> */}
                <NavLink to={`/category/cerdo`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Cerdo</NavLink>
                <NavLink to={`/category/carnes`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Carne Vacuna</NavLink>
                <CartWidget />
            </div>

        </nav>
    );
}

export default NavBar;
























// import { NavLink, Link } from "react-router-dom";
// import CartWidget from "../CartWidget/CartWidget";


// const NavBar = () => {
//     return (
//         <nav>
//             <Link to='/'>
//             <h3>
//                 Carniceria
//             </h3>
//             </Link>
//             <div className="Categories">
//                 <NavLink to={'/category/pollo'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Pollos</NavLink>
//                 <NavLink to={'/category/carnes'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Carnes</NavLink>
//                 <NavLink to={'/category/cerdo'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Cerdo</NavLink>


//             </div>
//             <CartWidget />
//         </nav>
//     )
// }
// export default NavBar;