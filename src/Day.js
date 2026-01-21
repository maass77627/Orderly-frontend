import React from "react";
import Item from "./Item";

function Day({day, handleClose, handleShow, items}) {
    console.log(items)
    console.log(day)

    function handleClick(day) {
        console.log(day)
        handleShow()

    }



    return (
        <div onClick={() => handleClick(day)} className="day">
            <h1>{day}</h1>
            {items.map((item) => <Item item={item} key={item.id}></Item>)}
          
        </div>
    )
}

export default Day