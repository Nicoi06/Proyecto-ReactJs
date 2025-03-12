//import Link
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, img, precio, stock }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={img}
                        alt={nombre}
                    />
                </figure>
            </div>
            <div className="card-content">               
                <div className="content">
                <p className="title is-4">{nombre}</p>
                <br/>
                <p className="subtitle is-6">Precio: ${precio}</p>
                
                {
                    stock > 0 ?(
                        <p className="subtitle is-6">Stock: {stock}</p>
                    ):(
                        <p className="subtitle is-6 has-text-danger">No hay stock</p>
                    )
                }
                <Link to={`/item/${id}`} className="button is-link">Ver detalle</Link>
            
                </div>
            </div>
        </div>

    )
}

export default Item;






















// import { Link } from "react-router-dom";

//     const Item = ({ id, name, img, price, stock }) => {
//         <div class="card">
//             <div class="card-image">
//                 <figure class="image is-4by3">
//                     <img
//                         src={img}
//                         alt={name}
//                     />
//                 </figure>
//             </div>
//             <div>
                
//             </div>
    
    
    
    
        // return (
    //     <article className='CardItem'>
    //         <header className='Header'>
    //             <h2 className='ItemHeader'>
    //                 {name}
    //             </h2>
    //         </header>
    //         <picture>
    //             <img src={img} alt={name} className='ItemImg'/>
    //         </picture>
    //         <section>
    //             <p className='Info'>
    //                 Precio: ${price}
    //             </p>
    //             <p className='Info'>
    //                 stock disponible: {stock}
    //             </p>
    //             <footer className='ItemFooter'>
    //                 <Link to={`/item/${id}`} className="Option">Ver detalle</Link>

    //             </footer>
    //         </section>
    //     </article>
        
        // {/* /</div> <div class="card">
        //     <div class="card-image">
        //         <figure class="image is-4by3">
        //             <img
        //                 src={img}
        //                 alt={name}
        //             /> */}
        //         </figure>
        //     </div>
        //     <div class="card-content">               
        //         <div class="content">
        //         <p class="title is-4">{name}</p>
        //         <br/>
        //         <p class="subtitle is-6">Precio: ${price}</p>
                
        //         {
        //             stock > 0 ?(
        //                 <p class="subtitle is-6">Stock: {stock}</p>
        //             ):(
        //            Link to={`/item/${id}`} className="button is-link">Ver detalle</Link>
                    // <p class="subtitle is-6 has-text-danger">No hay stock</p>
        //             )
        //         }
        //         <
        //         </div>
        //     </div>
        // </div>

    


// export default Item;