import STOCK from "../DATA/STOCK.json"


export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(STOCK)
        }, 1000)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const item = STOCK.find((el) => el.id === id)

            if(item){
                resolve(item)
            } else{
                reject({
                    error: "No se encontro el producto"
                })
            }
        }, 1000)
    } )
}