import React from "react";
import Item from "./Item";

function Day({day, handleShow, items}) {
    console.log(items)
    console.log(day)

    console.log("DAY:", day);
   console.log("ALL ITEMS:", items);
   console.log("ITEM DAYS:", items.map(i => i.day));
       let filteredItems = items.filter((item) => item.day === day)
       console.log("FILTERED:", filteredItems);


    return (
        <div  className="day">
            <h1>{day}</h1>
                     <button className="add-item-btn" onClick={() => handleShow(day)}>+ Add</button>

            {filteredItems.length > 0 && filteredItems.map((item) => <Item item={item} key={item.id}></Item>)}
          
        </div>
    )
}

export default Day