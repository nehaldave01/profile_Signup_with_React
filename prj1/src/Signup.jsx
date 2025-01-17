import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// REGEX //
let emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const Signup = () => {
  const [inpData, setinpData] = useState({name:"", surname:"", username:"", email:"", number:"", select:"", country:"", state:"", address:"",password:"",cpassword:""});

  console.log("aaaaaaa",inpData.select)
  
  const navigate = useNavigate()

  const handlechange = (e) => {
    setinpData({...inpData, [e.target.name] : e.target.value });
  };

  const click1 = () =>{
     if(validate()){
      console.log("okkk")
          let getData = JSON.parse(localStorage.getItem("signup")) || [];
          let findData = getData.find(
            (e) => 
              e.name === inpData.name &&
              e.surname === inpData.surname &&
              e.username === inpData.username &&
              e.email === inpData.email &&
              e.number === inpData.number &&
              e.select === inpData.select &&
              e.country === inpData.state &&
              e.address === inpData.address &&
              e.password === inpData.password &&
              e.cpassword === inpData.cpassword
          );

          if(!findData){
            let newData = getData.concat(inpData);
            localStorage.setItem("signup", JSON.stringify(newData));
            toast.success("You are Signup");
            navigate("/login")
          }else{
            toast.error("Username already exist")
          }

          setinpData({name:"", surname:"", username:"", email:"", number:"", select:"", country:"", state:"", address:"",password:"",cpassword:""});
     }
  }

  const validate = () => {
     let status = true;

    //  name
    if(inpData.name.length === 0){
      toast.error("Name is required");
      status = false;
    }else if(inpData.name.length <=3 ){
      toast.error("Characters more than 3");
      status = false;
    }

    // surname
    if(inpData.surname.length === 0){
      toast.error("Surname is required");
      status = false;
    }

    // username
    if(inpData.username.length === 0) {
      toast.error("Username required");
      status = false;
    } else if (inpData.username.length <= 3) {
      toast.error("Characters more than 3");
      status = false;
    }

    // email
    if (inpData.email.length === 0) {
      toast.error("Email required");
      status = false;
    } else if (!emailRegex.test(inpData.email)) {
      toast.error("Invalid");
      status = false;
    }

    // phone number
    if(inpData.number.length === 0){
      toast.error("Phone number is required");
      status = false;
    }

    // Gender selected
    if(!inpData.select){
      toast.error("Please select gender");
      status = false;
    }

     // country
     if(inpData.country.length === 0){
      toast.error("Country is required");
      status = false;
    }

    // state
    if(inpData.state.length === 0){
      toast.error("State is required");
      status = false;
    }

    // address
    if(inpData.address.length === 0){
      toast.error("Address is required");
      status = false;
    }

    // password
    if (inpData.password.length === 0) {
      toast.error("Password required!");
      status = false;
    } else if (!passwordRegex.test(inpData.password)) {
      toast.error("Invalid ");
      status = false;
    }

    return status

  }


  return (
    <>
      <div className="container shadow mx-auto mt-5">
        <h1 className="text-center m-5">Signup</h1>
        {/*  */}
        <div className="row">
          <div className=" col m-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={handlechange}
              name="name"
              value={inpData.name}
            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Surname:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter surname"
              onChange={handlechange}
              name="surname"
              value={inpData.surname}
            />
          </div>
        </div>
        {/*  */}
        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={handlechange}
              name="username"
              value={inpData.username}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              onChange={handlechange}
              name="email"
              value={inpData.email}
            />
          </div>
        </div>

        {/*  */}

        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Phone:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              onChange={handlechange}
              name="number"
              value={inpData.number}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Gender</label>
            <select className="form-select" name='select' aria-label="Default select example" value={inpData.select} onChange={handlechange}>
              <option disabled selected value="">
                Open this select menu
              </option>
              <option value="male"  >Male</option>
              <option value="female"  >Female</option>
              <option value="other"  >Oher</option>
            </select>
          </div>
        </div>

        {/*  */}
        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Country:</label>
            <input type="text" 
            className="form-control"
            onChange={handlechange}
            name="country"
            value={inpData.country}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">State:</label>
            <input type="text" 
            className="form-control"
            onChange={handlechange}
            name="state"
            value={inpData.state}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Address:</label>
            <input type="text" 
            className="form-control"
            onChange={handlechange}
            name="address"
            value={inpData.address}
            />
          </div>
        </div>

        <div className="row">
          <div className=" col m-2">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              onChange={handlechange}
              name="password"
              value={inpData.password}
            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter confirm password"
              onChange={handlechange}
              name="cpassword"
             value={inpData.cpassword}
            />
          </div>
        </div>

        <div className="d-grid mx-auto">
          <button className="btn btn-primary mx-auto m-4" onClick={click1}>
            Signup
          </button>
          <ToastContainer/>
        </div>
      </div>
    </>
  );
};

export default Signup;
