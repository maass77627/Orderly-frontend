import React from "react";
import Item from "./Item";

function Day({day, handleShow, items}) {
    console.log(items)
    console.log(day)

       let filteredItems = items.filter((item) => item.day === day)
      


    return (
        <div  className="day">
            <h1>{day}</h1>
                     <button className="add-item-btn" onClick={() => handleShow(day)}>+ Add</button>

            {filteredItems.length > 0 && filteredItems.map((item) => <Item item={item} key={item.id}></Item>)}
          
        </div>
    )
}

export default Day