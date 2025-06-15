import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const hanleLogout = () => {
    logOut()
    .then( () => {
      console.log('Logged Out Successfully');
    })
    .catch( (error) => {
      console.log(error.message);
    })
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user?.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userLogo} alt="" />
        {
          user ? <button onClick={hanleLogout} className="btn btn-primary
         px-10 ">Log Out</button> : <Link to={'/auth/login'} className="btn btn-primary
         px-10 ">Log In</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
