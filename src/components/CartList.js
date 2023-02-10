import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import{addProduct,reduceProduct,removeProduct} from '../redux'
import { useNavigate } from 'react-router-dom'


function CartList() {
  const navigate = useNavigate();  
  const dispatch=useDispatch();
  const clist=useSelector(state=>state.cart);
  const numOfProducts=useSelector(state=>state.numOfProducts);
  
    
     const productList=clist.map((p)=>{
      return(
      <div key={p.id}>
        <div className="display">
          <div className="card">
            <div> <img alt="img"src={p.image}/></div>
          </div>
          <div className="content">
            <div> {p.title}</div>
            <div> {p.price}$</div>
            <div> {p.rating.rate}*</div>
            <div>Quantity:<button onClick={()=>dispatch(reduceProduct(p))}>-</button >{p.count}<button onClick={()=>dispatch(addProduct(p))}>+</button></div>
          </div>
          <button onClick={()=>dispatch(removeProduct(p))}>REMOVE</button>
        </div> 
      </div>
      )})
      return(
      <div>
        <label className="header">
          CART
        </label>
        <div className="header">
          <button >CART:{numOfProducts}</button>
         <button  onClick={()=> navigate("/Bill")}>PROCEED</button>
        </div>
        <div className="page">{productList}</div>
      </div>


    
  )
}

export default CartList
