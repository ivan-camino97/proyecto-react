const bebidas = [
    {id: 1, nombre:'CocaCola', category:'grande', description:'cocacola 1.750ml', price: 400, pictureUrl:'https://tupicada.com.ar/wp-content/uploads/2019/09/coca-cola-1-75l1-af6834bdee0a01311d15484387930129-1024-1024.jpg', stock: 10},
    {id: 2, nombre:'CocaGrande', category:'grande', description:'cocacola 2.250ml', price: 500, pictureUrl:'https://club23.com.ar/wp-content/uploads/2021/11/Coca-Cola-2.25L.jpg', stock: 10},
    {id: 3, nombre:'CocaChica', category:'chica', description:'cocacola 500ml', price: 200,pictureUrl:'https://ardiaprod.vtexassets.com/arquivos/ids/228489-800-auto?v=637959904262570000&width=800&height=auto&aspect=true', stock: 10},
    {id: 4, nombre:'CocaLata', category:'chica', description:'cocacola 354ml', price: 150, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_856341-MLA46350484270_062021-O.webp', stock: 10}
]

export const getAllProducts = () => {
const promise = new Promise((resolve) => {
    setTimeout(() => {
        return resolve(bebidas);
    }, 2000)

}) 
return promise
};

 export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
    const result = bebidas.find((bebida) => bebida.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000)
    
    }) 
    return promise
    };

    export const getAllProductsByCategory = (categoryId) => {
        const promise = new Promise((resolve) => {
            const results = bebidas.filter((bebida) => bebida.category === categoryId)
            setTimeout(() => {
                return resolve(results);
            }, 2000)
        
        }) 
        return promise
        };