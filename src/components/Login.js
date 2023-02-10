import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate();
  const[details,setDetails]=useState({
    username:"",
    password:""
  })

  const handleInput=(e)=>{
    setDetails({
      ...details,
      [e.target.name]: e.target.value,

    });
  }
  const validate=(e)=>{
    e.preventDefault();
    
    if(details.username!==""&&details.password!==""){
      if(details.username==="user"){
        if(details.password==="password"){
          navigate("/Dashboard");
        }
        else{
          alert("Invalid Password")
        }
    }
    else{
      alert("Invalid Username")
    }
  }
  else{
    alert("Please fill the values")
  }

}
  return (
    <>
      <label className="header">USER LOGIN</label>
     <form className="userLogin" onSubmit={(e)=>validate(e)}>
      <div>
        <label>UserName:</label>
        <input type="text" name="username" onChange={(e)=>handleInput(e)} value={details.username}/>
      </div>
    <div>
      <label>Password:</label>
      <input type="password" name="password" onChange={(e)=>handleInput(e)} value={details.password}/>
     <br/>
    </div>
    
     <button>SUBMIT</button>
    </form>
    </>
   
  )
}

export default Login
