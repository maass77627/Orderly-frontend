import React from "react";


function Nav({items}) {
    return (
        <div className="nav">
         <h1>Orderly</h1>
         {items.map((item) => <button key={item.id} className="nav-button">{item.category}</button>)}


        </div>

    )
}

export default Nav