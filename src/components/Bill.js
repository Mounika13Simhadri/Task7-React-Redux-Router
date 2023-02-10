import React,{useState,Navigate} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Bill = () => {
const clist=useSelector(state=>state.cart);
const[aform,setAform]=useState(false)
const[show,setShow]=useState("true")
const Total=useSelector(state=>state.Total);
const t=Total.toFixed(2);
const[address,setAddress]=useState([]);
const navigate = useNavigate();
const handleAddress=(e)=>{
setAddress(...address,
  e.target.name=e.target.value)
}
  return (
    <div>
        <label style={{color:"maroon", fontSize:"larger",textAlign:'center'}}><h1>BILL</h1></label>
     {aform===false? <table  className="etable">
            <thead>
              <tr>
                <th>ProductId</th>
                <th>ProductName</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {clist.map((p) =>
                   (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.title}</td>
                      <td>{p.price}</td>
                      <td>{p.count}</td>
                      <td>{p.count*p.price}</td>
                  </tr>     
                  ))}   
            </tbody>
          </table>:""}
          <label  style={{color:"maroon" ,fontSize:"larger",textAlign:'center'}}><h2>Total Amount:{t}</h2></label>
          {show?<button onClick={()=>{setAform(true);setShow(false)}}className="address">Add Address</button>:""}
          {aform?<form className="addform" onSubmit={()=>navigate("/Logout")}>
            <div><label>First Name:</label><input type="text" defaultValue="" name="Fname" onChange={(e)=>handleAddress(e)}/></div>
            <div><label>Last Name:</label><input type="text" name="Lname" defaultValue="" onChange={(e)=>handleAddress(e)}/></div>
            <div><label>Phone No.:</label><input type="text" name="Phone" defaultValue="" onChange={(e)=>handleAddress(e)}/></div>
            <div><label>Address:</label><textarea type="text" name="Address" defaultValue="" onChange={(e)=>handleAddress(e)}/></div>
            <div><label>Pincode:</label><input type="text" name="Pin" defaultValue="" onChange={(e)=>handleAddress(e)}/></div>
            <div><label>State:</label><input type="text" name="State" defaultValue="" onChange={(e)=>handleAddress(e)}/></div>
            <button>SUMBIT & PAY</button>
          </form>:""}
    </div>
  )
}

export default Bill
