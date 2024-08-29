import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {

  const [showuser, setshowuser] = useState({})
  console.log(showuser)

  const navigate = useNavigate()

  const logoutClick = () => {
       localStorage.removeItem("login");
       navigate("/login")
  }

  useEffect(() => {
    let getsignup = JSON.parse(localStorage.getItem("signup")) || [];
    let getlogin = JSON.parse(localStorage.getItem("login")) || {}

  let a = getsignup.find((e) =>{
return (  
  e.username === getlogin.username && e.password === getlogin.password
)

    })
    setshowuser(a)

  },[])

  return (
    <>
      <div className="container">
        <h1 className="text-center m-3">User Profile</h1>

        <div className="row">
          <div className=" col m-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={showuser.name}
            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Surname:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter surname"
              value={showuser.surname}

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
              value={showuser.username}

            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              value={showuser.email}

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
              value={showuser.number}

            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Gender</label>
              
              <select class="form-select" aria-label="Default select example" value={showuser.select} >
              <option disabled selected>
                Open this select menu
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Oher</option>
            </select>
          </div>
        </div>
        {/*  */}
        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Country:</label>
            <input type="text" 
            className="form-control"
            value={showuser.country}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">State:</label>
            <input type="text"
             className="form-control"
             value={showuser.state}
             />
          </div>

          <div className="col m-2">
            <label htmlFor="">Address:</label>
            <input type="text"
             className="form-control"
             value={showuser.address}
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
              value={showuser.password}

            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter confirm password"
              value={showuser.cpassword}

            />
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" onClick={logoutClick}>Log Out</button>
          {/* <button className="btn btn-warning" >Update</button> */}
        </div>
        
      </div>
    </>
  );
};

export default User;
