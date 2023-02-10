import{SET_PRODUCTS,ADD_PRODUCT,REDUCE_PRODUCT,REMOVE_PRODUCT} from './cartTypes'

export const setProducts=(products)=>{
    return{
        type:SET_PRODUCTS,
        payload:products

    }
}
export const addProduct=(p)=>{
    return{
        type:ADD_PRODUCT,
        payload:p
    }
}
export const reduceProduct=(p)=>{
    return{
        type:REDUCE_PRODUCT,
        payload:p
    }
    
}
export const removeProduct=(p)=>{
    return{
        type:REMOVE_PRODUCT,
        payload:p

    }
}