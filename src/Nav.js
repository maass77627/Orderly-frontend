import React from "react";
import {NavLink} from "react-router-dom"


function Nav({setItems}) {

    function clearWeek() {
    setItems([])
}

   
    return (
        <div className="nav">
         <img className="logo" src="/Orderly.png" alt="logo"></img>
        <div className="link-wrapper">
         <NavLink className="link" to="/" >
         Home
         </NavLink>
         <NavLink className="link" to="/calendar" >
         Calendar
         </NavLink>
         </div>
          <button className="clear" onClick={clearWeek}>Clear Week</button>
        </div>

    )
}

export default Nav