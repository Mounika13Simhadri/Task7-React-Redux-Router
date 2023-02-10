import{SET_PRODUCTS,ADD_PRODUCT,REDUCE_PRODUCT,REMOVE_PRODUCT} from './cartTypes'

const initialState={
    numOfProducts:0,
    products:[],
    cart:[],
    Total:0 
}
const cartReducer=(state=initialState,action)=>{
    
    switch(action.type){

        case SET_PRODUCTS:
            let newProducts=action.payload
            let pro=newProducts.map(p=>{
               return{
                count:1,...p}
            })
            return{
            ...state,
            products:pro,
            
        }
        case ADD_PRODUCT:
            let newCart = [...state.cart]
            let itemIndex = state.cart.findIndex(obj=>obj.id===action.payload.id)  
            let currItem = state.cart[itemIndex]

            if(currItem){
            currItem.count = parseInt(currItem.count) + 1
            state.cart[itemIndex] = currItem;
            newCart = [...state.cart]
            }
            else{
            newCart = newCart.concat(action.payload)
            }
           
        return {
            ...state,
            cart: newCart,   
            numOfProducts:state.numOfProducts+1,   
            Total:state.Total+action.payload.price
            
        }
        case REDUCE_PRODUCT:
            const cart = [...state.cart]
            const updatedCartt =[...cart, cart.forEach(item =>{ 
                if(item.id === action.payload.id){
                    item.count=item.count-1;
                }})]
            return{
                ...state,
                cart: updatedCartt,
                numOfProducts:state.numOfProducts-1  ,
                Total:state.Total-action.payload.price
            }
        case REMOVE_PRODUCT:
            const cartt = [...state.cart]
            
            const updatedCart = cartt.filter(item => item.id !== action.payload.id)
            return {
              ...state,
              cart: updatedCart,
              numOfProducts:state.numOfProducts-action.payload.count  ,
              Total:state.Total-(action.payload.count*action.payload.price)
            }
        
        
        default:return state
    }
}

export default cartReducer