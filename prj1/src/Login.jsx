import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// REGEX //
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const Login = () => {
const [inpData2, setinpData2] = useState({username:"", password:""});

const navigate = useNavigate()

const handlechange = (e) => {
  setinpData2({...inpData2, [e.target.name] : e.target.value})
}

const click2 = () => {
  if(validation2()){

    let getData = JSON.parse(localStorage.getItem("signup")) || [];

    let findData = getData.find(
      (e) => e.username === inpData2.username && e.password === inpData2.password
    );

    if(findData){
      localStorage.setItem("login",JSON.stringify(inpData2));
      toast.success("Successfully Login");
      navigate("/user")
    }else{
      toast.error("Username already exists");
    }
   setinpData2({ username: "", password: "" });
  }
}

const validation2 = () => {
  let status = true;

  if (inpData2.username.length === 0) {
    toast.error("Username required");
    status = false;
  } else if (inpData2.username.length <= 3) {
    toast.error("Characters more than 3");
    status = false;
  }

  if (inpData2.password.length === 0) {
    toast.error("Password required!");
    status = false;
  } else if (!passwordRegex.test(inpData2.password)) {
    toast.error("Invalid Password Address");
    status = false;
  }

  return status;
};


  return (
    <>
      <div className='container w-25 shadow mx-auto mt-5'>
      <h1 className='text-center m-5'>Login</h1>
          <div className='m-2'>
            <label htmlFor="">Username:</label>
            <input type="text" 
            className='form-control' 
            placeholder='Enter username'
            onChange={handlechange}
            name="username"
            value={inpData2.username}/>
          </div>

          <div className='m-2'>
            <label htmlFor="">Password:</label>
            <input type="text" 
            className='form-control' 
            placeholder='Enter password'
            onChange={handlechange}
            name='password'
            value={inpData2.password}/>
          </div>

          <div className='d-grid mx-auto m-2'>
            <button className='btn btn-primary m-4' onClick={click2}>Login</button>
          </div>
          <ToastContainer/>
      </div>  
    </>
  )
}

export default Login