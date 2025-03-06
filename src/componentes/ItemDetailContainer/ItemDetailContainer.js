import { useState, useEffect } from "react";
//import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

/* firebase */
 import { getDoc, doc } from "firebase/firestore";
 import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "items", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])
        //.then(response => {
    //         setProduct(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // },[itemId])
    // // 
    // const { itemId } = useParams()

    // useEffect(() => {
    //     
    //     

    //     

    return (
        <div className="ItemDetailContainer">
                {loading ? (
                    <h1 className="text is-size-4">Cargando detalles ...</h1>
                ) : (
                    <ItemDetail {...product} />
                )}
            
        </div>
    )
}

export default ItemDetailContainer;