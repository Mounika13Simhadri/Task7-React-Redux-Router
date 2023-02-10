import React,{useEffect,useState} from 'react'
import{setProducts,addProduct} from '../redux'
import { useNavigate } from 'react-router-dom'

import Axios from "axios"
import {useSelector,useDispatch} from 'react-redux'

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const[text,setText]=useState("AddToCart")

  const getProducts=()=>Axios.get("https://fakestoreapi.com/products").then((response)=>{
    dispatch(setProducts(response.data))
  });
  
  useEffect(()=>{ 
    getProducts();
  },[])
const changeText=()=>{
  setText("AddedToCart")
}

  const numOfProducts=useSelector(state=>state.numOfProducts);
  const products=useSelector(state=>state.products);
  const List=products.map((p,index) =>{
    return(
      <div className="page" key={p.id}>
 
          <div className="display">
            <div className="card">
              <div> <img alt="img"src={p.image}/></div>
            </div>
            <div className="content">
              <div> {p.title}</div>
              <div> {p.price}$</div>
              <div> {p.rating.rate}*</div>
            </div>
            <div className="cart">
              <button style={{width:150,border:'none'}} onClick={()=>{dispatch(addProduct(p));changeText();}}>{text}</button>
            </div>
        </div>
      </div>

    )
    })
  return (

    <div className="dashboard">
  
    <label className="header">
      DASHBOARD PAGE
    </label>
    <button style={{position:"fixed",float:"right"}}onClick={()=>navigate("/CartList")}>CART:{numOfProducts}</button>
    <div class="page">{List}</div>
    </div>
  )
}

export default Dashboard

