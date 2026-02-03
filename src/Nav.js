import React from "react";
import {NavLink} from "react-router-dom"


function Nav({setItems}) {

    function clearWeek() {
    setItems([])
}

   
    return (
        <div className="nav">
        
        
         <NavLink className="link" to="/" >
         Home
         </NavLink>
          <img className="logo" src="/Orderly.png" alt="logo"></img>
         <NavLink className="link" to="/calendar" >
         Calendar
         </NavLink>
         
          <button className="clear" onClick={clearWeek}>Clear Week</button>
        </div>

    )
}

export default Nav