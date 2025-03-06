const products = [
    {
        id:'1',
        name:'Iphone 12',
        price: 1000,
        category:'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: "Descripción de Iphone 12"
    },
    {
        id:'2',
        name:'Iphone 13',
        price: 1500,
        category:'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 28,
        description: "Descripción de Iphone 13"
    }
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
         setTimeout(() => {
             resolve(products.filter(prod => prod.category === category));
         }, 500);
     });
 };  