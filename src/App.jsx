import './/App.css'
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
/* import ItemCount from "./ItemCount/ItemCount"; */
//importamos bulma
import "bulma/css/bulma.css";
//react-router-dom
import { BrowserRouter,Routes,Route } from "react-router-dom";
//importamos contexto del carrito de compras
import { CartProvider } from "./context/CartContext";
//importamos componente de cart
import Cart from "./componentes/Cart/Cart";
/* Checkout */
import Checkout from "./componentes/Checkout/Checkout";

import React from 'react';
import ShapeExample from './componentes/imglogo/Image';


function App(){
    return (
    
        <div className="container">
            <BrowserRouter>
                <CartProvider>
                <ShapeExample/>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>   
                </CartProvider>

            </BrowserRouter>
            
        </div>
    )
}
export default App