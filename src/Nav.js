import React from "react";
import {NavLink} from "react-router-dom"


function Nav({}) {

   
    return (
        <div className="nav">
         {/* <h1>Orderly</h1> */}
         <img className="logo" src="/Orderly.png" alt="logo"></img>
        
         
         <div className="link-wrapper">
         <NavLink className="link" to="/" >
         Home
         </NavLink>
         <NavLink className="link" to="/calendar" >
         Calendar
         </NavLink>
         </div>

        </div>

    )
}

export default Nav